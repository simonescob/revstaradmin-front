import axios from 'axios';
import { Product } from '../entities/Product';
import { BASE_URL } from '../Helpers/URLs';

export const fetchListProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>(`${BASE_URL}product/all-products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const createProduct = async (data: Product): Promise<Product[]> => {
  try {
    const response = await axios.post<Product[]>(`${BASE_URL}product/create`, data);
    return response.data;
  } catch (error) {
    console.error('Error creating products:', error);
    throw error;
  }
};

export const updateProduct = async (data: Product): Promise<Product[]> => {
  try {
    const response = await axios.post<Product[]>(`${BASE_URL}product/update`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating products:', error);
    throw error;
  }
};

export const deleteProduct = async (id: number): Promise<Product[]> => {
  try {
    const response = await axios.post<Product[]>(`${BASE_URL}product/delete`, { id });
    return response.data;
  } catch (error) {
    console.error('Error deleting products:', error);
    throw error;
  }
};