import { navigateTo } from '../index.js';

export const Home = {
  render: () => `
    <h1>Добро пожаловать</h1>
    <button onclick="navigateTo('/register')">Зарегистрироваться</button>
    <button onclick="navigateTo('/products')">Каталог продуктов</button>
  `,
  afterRender: () => {},
};
