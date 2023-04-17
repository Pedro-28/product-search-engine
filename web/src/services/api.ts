import axios from 'axios';
import { IProduct } from '../interfaces/product';

// import dotenv from "dotenv";
// dotenv.config();
// const { SERVER_URL } = process.env;

type ApiResponse = {
  data: { products: IProduct[] };
  status: number;
};

export const api = axios.create({
  baseURL: 'https://web-scraper-backend-nqdh.onrender.com',
});

export async function getProductsfromMercadoLivre(productName: string): Promise<ApiResponse> {
  const data = await api.get(`/product/${productName}/mercadolivre`);
  return data;
}

export async function getProductsfromBuscape(productName: string): Promise<ApiResponse> {
  const data = await api.get(`/product/${productName}/buscape`);
  return data;
}

export async function getProductsByMercadoLivreCategory(categoryName: string): Promise<ApiResponse> {
  const data = await api.get(`/category/${categoryName}/mercadolivre`);
  return data;
}

export async function getProductsByBuscapeCategory(categoryName: string): Promise<ApiResponse> {
  const data = await api.get(`/category/${categoryName}/buscape`);
  return data;
}
