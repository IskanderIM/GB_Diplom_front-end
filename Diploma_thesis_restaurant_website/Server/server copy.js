// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;
const EMAILS_FILE = './emails.json'; // Путь к файлу для хранения email и даты подписки

// Middleware для обработки CORS-запросов и JSON-данных
app.use(cors());
app.use(bodyParser.json());

// Функция для чтения email из JSON-файла
const readEmailsFromFile = () => {
  try {
    const data = fs.readFileSync(EMAILS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // Если файл не существует или пуст, возвращаем пустой массив
    return [];
  }
};

// Функция для записи email и даты в JSON-файл
const writeEmailsToFile = (emails) => {
  fs.writeFileSync(EMAILS_FILE, JSON.stringify(emails, null, 2));
};

// Маршрут для обработки POST-запросов подписки
app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;

  if (email) {
    // Читаем текущие данные из файла
    const emails = readEmailsFromFile();

    // Проверяем, существует ли уже этот email
    const isEmailExist = emails.some((entry) => entry.email === email);

    if (isEmailExist) {
      return res.status(400).send({ message: 'Этот email уже подписан.' });
    }

    // Формируем объект с email и текущей датой
    const newSubscription = {
      email,
      date: new Date().toISOString(), // Текущая дата и время в формате ISO
    };

    // Добавляем новый объект в массив
    emails.push(newSubscription);

    // Сохраняем обновленный список в файл
    writeEmailsToFile(emails);

    // Отправляем успешный ответ
    res.status(200).send({ message: 'Вы успешно подписались на рассылку!' });
  } else {
    res.status(400).send({ message: 'Неверный email.' });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
