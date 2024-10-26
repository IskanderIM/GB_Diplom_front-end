const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Файлы для хранения данных
const EMAILS_FILE = './emails.json'; // Файл для подписок
const BOOKINGS_FILE = './bookings.json'; // Файл для бронирований
const MENU_FILE = path.join(__dirname, 'data', 'data-menu.json'); // Файл для данных меню

// Middleware для обработки CORS-запросов и JSON-данных
app.use(cors());
app.use(bodyParser.json());

// Чтение подписок из файла
const readEmailsFromFile = () => {
  try {
    const data = fs.readFileSync(EMAILS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Запись подписок в файл
const writeEmailsToFile = (emails) => {
  fs.writeFileSync(EMAILS_FILE, JSON.stringify(emails, null, 2));
};

// Настройка Nodemailer для отправки email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'agenstvokurs@gmail.com', // Ваш email
    pass: 'ciwqhrhlgjhoaqso',  // Ваш пароль
  },
});

// Маршрут для подписки на рассылку
app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;

  if (email) {
    const emails = readEmailsFromFile();

    // Проверка наличия email
    const isEmailExist = emails.some((entry) => entry.email === email);

    if (isEmailExist) {
      return res.status(400).send({ message: 'Этот email уже подписан.' });
    }

    const newSubscription = {
      email,
      date: new Date().toISOString(),
    };

    emails.push(newSubscription);
    writeEmailsToFile(emails);

    // Отправка email уведомления
    const mailOptions = {
      from: 'agenstvokurs@gmail.com',
      to: 'isk787739@gmail.com',
      subject: 'Новая подписка на рассылку',
      text: `Новый подписчик: ${email}.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Ошибка отправки email:', error);
        return res.status(500).send({ message: 'Ошибка при отправке email.' });
      }
      res.status(200).send({ message: 'Подписка успешно оформлена и email отправлен.' });
    });
  } else {
    res.status(400).send({ message: 'Неверный email.' });
  }
});

// Чтение бронирований из файла
const readBookingsFromFile = () => {
  try {
    const data = fs.readFileSync(BOOKINGS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Запись бронирований в файл
const writeBookingsToFile = (bookings) => {
  fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2));
};

// Маршрут для обработки бронирования столиков
app.post('/api/book', (req, res) => {
  const { firstName, lastName, email, phone, date, time, guests } = req.body;

  if (!firstName || !lastName || !phone || !date || !time || !guests) {
    return res.status(400).send({ message: 'Все поля обязательны для заполнения.' });
  }

  const bookings = readBookingsFromFile();

  const newBooking = {
    firstName,
    lastName,
    email,
    phone,
    date,
    time,
    guests,
  };

  bookings.push(newBooking);
  writeBookingsToFile(bookings);

  // Отправка email уведомления о бронировании
  const mailOptions = {
    from: 'agenstvokurs@gmail.com',
    to: 'isk787739@gmail.com',
    subject: 'Новое бронирование столика',
    text: `
      Имя: ${firstName} ${lastName}
      Email: ${email || 'не указана'}
      Телефон: ${phone}
      Дата: ${date}
      Время: ${time}
      Количество человек: ${guests}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Ошибка отправки email:', error);
      return res.status(500).send({ message: 'Ошибка при отправке email.' });
    }
    res.status(200).send({ message: 'Бронирование успешно оформлено и email отправлен.' });
  });
});

// Маршрут для получения данных меню
app.get('/api/menu', (req, res) => {
  fs.readFile(MENU_FILE, 'utf-8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла меню:', err);
      return res.status(500).json({ message: 'Ошибка сервера при чтении меню' });
    }
    const menuData = JSON.parse(data);
    res.status(200).json(menuData);
  });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});