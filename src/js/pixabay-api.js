const API_KEY = '51392079-b36bb30a852bc284302a63f16';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data; // Повертає весь об'єкт, включно з data.hits
  } catch (error) {
    console.error('Помилка при отриманні зображень:', error);
    throw error;
  }
}