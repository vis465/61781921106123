import axios from 'axios';

const API_URL = 'http://localhost:3001'; // Update this to your server URL

export const getProducts = async (filters) => {
  try {
    const response = await axios.post(`${API_URL}/getProducts`, filters);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error.message);
    throw error;
  }
};
