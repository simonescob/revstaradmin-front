import axios from 'axios';
import { BASE_URL } from '../Helpers/URLs';

export const postLogin = async (username: string, password: string): Promise<any[]> => {
  try {
    const response = await axios.post<any[]>(`${BASE_URL}auth/login`, { username, password });
    return response.data;
  } catch (error) {
    console.error('Error logging user:', error);
    throw error;
  }
};
