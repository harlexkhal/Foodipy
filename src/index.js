import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';
import ApplicationEngine from '../custom_modules/application/application.js';

const application = new ApplicationEngine();
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
