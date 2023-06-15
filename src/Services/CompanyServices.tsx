import axios from 'axios';
import { Company } from '../entities/Company';
import { BASE_URL } from '../Helpers/URLs';

export const fetchListCompanies = async (): Promise<Company[]> => {
  try {
    const response = await axios.get<Company[]>(`${BASE_URL}company/all-companies`);
    return response.data;
  } catch (error) {
    console.error('Error fetching companies:', error);
    throw error;
  }
};