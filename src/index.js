import './index.css';
import Application from '../custom_modules/application/application.js';
import '@fortawesome/fontawesome-free/js/all.js';

const application = new Application();
application.start();

const modal = document.querySelector('#the-modal');

const modalCloser = document.querySelector('#modal-closer');
modalCloser.addEventListener('click', () => {
  modal.classList.remove('d-block');
  modal.classList.add('d-none');
});

let commentSpans = document.querySelectorAll('.comments');
commentSpans = Array.from(commentSpans);
commentSpans.forEach((span) => {
  span.addEventListener('click', () => {
    modal.classList.remove('d-none');
    modal.classList.add('d-block');
  });
});
