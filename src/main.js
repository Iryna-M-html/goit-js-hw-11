import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  const query = event.currentTarget.elements.searchQuery.value.trim();
  if (!query) return;

  clearGallery();
  showLoader(); 

  try {
    const data = await getImagesByQuery(query);
    createGallery(data.hits);
  } catch (error) {
    console.error('Не вдалося завантажити зображення:', error);
  } finally {
    hideLoader();
  }
});