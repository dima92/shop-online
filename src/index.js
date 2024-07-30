import './styles/index.scss';
import './assets/fonts/Montserrat-Regular.ttf';
import { Home } from './pages/home.js';
import { Register } from './pages/register.js';
import { ProductCatalog } from './pages/product-catalog.js';

const routes = {
  '/': Home,
  '/register': Register,
  '/products': ProductCatalog,
};

function router() {
  const path = window.location.pathname;
  const page = routes[path] || Home;
  document.getElementById('app').innerHTML = page.render();
  page.afterRender();
}

window.addEventListener('load', router);
window.addEventListener('popstate', router);

export function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

window.navigateTo = navigateTo;
