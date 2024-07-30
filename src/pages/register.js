import { navigateTo } from '../index.js';

export const Register = {
  render: () => `
    <h1>Регистрация</h1>
    <form id="register-form">
      <input type="text" id="username" placeholder="Имя пользователя" required>
      <input type="email" id="email" placeholder="Email" required>
      <input type="password" id="password" placeholder="Пароль" required>
      <button type="submit">Зарегистрироваться</button>
      <p class="error-message" id="error-message"></p>
    </form>
    <button onclick="navigateTo('/')">Назад</button>
  `,
  afterRender: () => {
    const user = localStorage.getItem('user');
    if (user) {
      alert('Вы уже зарегистрированы!');
      navigateTo('/products');
      return;
    }

    const registerForm = document.getElementById('register-form');
    const errorMessage = document.getElementById('error-message');

    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      if (username && email && password) {
        const user = { username, email, password };
        localStorage.setItem('user', JSON.stringify(user));
        alert('Регистрация прошла успешно!');
        navigateTo('/products');
      } else {
        errorMessage.textContent = 'Пожалуйста, заполните все поля.';
      }
    });
  },
};
