const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Пути к файлам данных
const EMAILS_FILE = path.join(__dirname, 'emails.json'); // Файл для подписок
const BOOKINGS_FILE = path.join(__dirname, 'bookings.json'); // Файл для бронирований
const MENU_FILE = path.join(__dirname, 'data', 'data-menu.json'); // Файл для меню
const ARTICLES_FILE = path.join(__dirname, 'data', 'data-articles.json'); // Файл для статей
const COMMENTS_FILE = path.join(__dirname, 'data', 'comments.json'); // Файл для комментариев

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Чтение данных из файлов
const readFileData = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Ошибка чтения файла: ${filePath}`, error);
    return [];
  }
};

// Запись данных в файл
const writeFileData = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(`Ошибка записи в файл: ${filePath}`, error);
  }
};

// Настройка Nodemailer для отправки email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'agenstvokurs@gmail.com', // Ваш email
    pass: 'ciwqhrhlgjhoaqso', // Ваш пароль
  },
});

// Маршрут для подписки на рассылку
app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send({ message: 'Email обязателен для подписки.' });
  }

  const emails = readFileData(EMAILS_FILE);
  
  // Проверка на дубликат email
  if (emails.some((entry) => entry.email === email)) {
    return res.status(400).send({ message: 'Этот email уже подписан.' });
  }

  // Добавляем новый email
  const newSubscription = { email, date: new Date().toISOString() };
  emails.push(newSubscription);
  writeFileData(EMAILS_FILE, emails);

  // Отправка email уведомления
  const mailOptions = {
    from: 'agenstvokurs@gmail.com',
    to: 'isk787739@gmail.com',
    subject: 'Новая подписка на рассылку',
    text: `Новый подписчик: ${email}.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Ошибка при отправке email:', error);
      return res.status(500).send({ message: 'Ошибка при отправке email.' });
    }
    res.status(200).send({ message: 'Подписка успешно оформлена и email отправлен.' });
  });
});

// Маршрут для бронирования столиков
app.post('/api/book', (req, res) => {
  const { firstName, lastName, email, phone, date, time, guests } = req.body;

  // Проверка обязательных полей
  if (!firstName || !lastName || !phone || !date || !time || !guests) {
    return res.status(400).send({ message: 'Все поля обязательны для заполнения.' });
  }

  const bookings = readFileData(BOOKINGS_FILE);

  // Добавляем новое бронирование
  const newBooking = { firstName, lastName, email, phone, date, time, guests };
  bookings.push(newBooking);
  writeFileData(BOOKINGS_FILE, bookings);

  // Отправка email уведомления
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
      console.error('Ошибка при отправке email:', error);
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
    try {
      const menuData = JSON.parse(data);
      res.status(200).json(menuData);
    } catch (parseError) {
      console.error('Ошибка парсинга файла меню:', parseError);
      res.status(500).json({ message: 'Ошибка обработки данных меню' });
    }
  });
});

// ----------- Новый функционал для работы с блогами -----------

// Маршрут для получения статей с пагинацией (по 5 статей на запрос)
app.get('/api/articles', (req, res) => {
  const articles = readFileData(ARTICLES_FILE);
  const page = parseInt(req.query.page) || 1;
  const limit = 5;
  const start = (page - 1) * limit;
  const end = start + limit;

  const paginatedArticles = articles.slice(start, end);

  res.status(200).json(paginatedArticles);
});

// Маршрут для получения статьи по ID
app.get('/api/articles/:id', (req, res) => {
  const articles = readFileData(ARTICLES_FILE);
  const article = articles.find((a) => a.id == req.params.id);

  if (!article) {
    return res.status(404).json({ message: 'Статья не найдена' });
  }

  res.status(200).json(article);
});

// Маршрут для добавления комментария к статье
app.post('/api/articles/:id/comments', (req, res) => {
  const { username, content } = req.body;
  const articleId = req.params.id;

  if (!username || !content) {
    return res.status(400).send({ message: 'Имя пользователя и текст комментария обязательны.' });
  }

  const comments = readFileData(COMMENTS_FILE);
  const newComment = {
    username,
    content,
    createdAt: new Date().toISOString(),
  };

  // Если комментариев к статье ещё нет, создаём массив
  if (!comments[articleId]) {
    comments[articleId] = [];
  }

  comments[articleId].push(newComment);
  writeFileData(COMMENTS_FILE, comments);

  res.status(201).json(newComment);
});

// ----------- Конец функционала для блогов -----------

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});