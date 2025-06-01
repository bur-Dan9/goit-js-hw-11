import { renderImages, showLoader, hideLoader } from "./js/render-functions";
import { fetchImages } from "./js/pixabay-api";

import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = event.target.elements['search-text'].value.trim();
  if (!query) {
    iziToast.error({ title: 'Error', message: 'Please enter a search query!' });
    return;
  }

  showLoader(); // используем функцию из render-functions.js

  try {
    const images = await fetchImages(query);

    if (images.length === 0) {
      iziToast.warning({ title: 'Oops!', message: 'No images found. Try again!' });
    } else {
      renderImages(images);
    }
  } catch (error) {
    iziToast.error({ title: 'Error', message: 'Failed to fetch images. Try again later!' });
  } finally {
    hideLoader(); // тоже используем экспортированную функцию
  }
});