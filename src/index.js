import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';
import Icon from './assets/images/loader.gif';
import ApplicationEngine from '../custom_modules/application/application.js';

const loaders = document.querySelectorAll('.loading');
loaders.forEach((loader) => {
  loader.src = Icon;
});

const application = new ApplicationEngine();
application.start();