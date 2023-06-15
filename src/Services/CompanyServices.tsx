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

export const createCompany = async (data: Company): Promise<Company[]> => {
  try {
    const response = await axios.post<Company[]>(`${BASE_URL}company/create`, data);
    return response.data;
  } catch (error) {
    console.error('Error creating products:', error);
    throw error;
  }
};

export const updateCompany = async (data: Company): Promise<Company[]> => {
  try {
    const response = await axios.post<Company[]>(`${BASE_URL}company/update`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating products:', error);
    throw error;
  }
};

export const deleteCompany = async (id: number): Promise<Company[]> => {
  try {
    const response = await axios.post<Company[]>(`${BASE_URL}company/delete`, id);
    return response.data;
  } catch (error) {
    console.error('Error deleting products:', error);
    throw error;
  }
};