const API_KEY = '51392079-b36bb30a852bc284302a63f16'; // Замініть на ваш фактичний API ключ
const BASE_URL = 'https://pixabay.com/api/';

/**
 * Виконує HTTP-запит до Pixabay API за пошуковим словом
 * @param {string} query - Пошуковий запит
 * @returns {Promise<Object>} - Об'єкт data з відповіді API
 */
export async function getImagesByQuery(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Помилка при отриманні зображень з Pixabay:', error);
    throw error;
  }
}