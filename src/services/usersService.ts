// usersService.ts
import axiosInstance from '../axiosInstance'; // Asegúrate de que la ruta de importación sea correcta
import { AxiosRequestConfig } from 'axios';

export const getAllUsers = (token: string, limit?: number, page?: number) => {
  const options: AxiosRequestConfig = {
    headers: {
      'x-access-token': token,
    },
    params: {
      limit,
      page,
    },
  };

  return axiosInstance.get('/users', options).catch(handleErrorResponse);
};

export const getUserById = (token: string, id: string) => {
  const options: AxiosRequestConfig = {
    headers: {
      'x-access-token': token,
    },
  };

  return axiosInstance.get(`/users/${id}`, options).catch(handleErrorResponse);
};

export const deleteUserById = (token: string, id: string) => {
  const options: AxiosRequestConfig = {
    headers: {
      'x-access-token': token,
    },
  };

  return axiosInstance.delete(`/users/${id}`, options).catch(handleErrorResponse);
};

export const editUserById = (token: string, id: string, userData: any) => {
  const options: AxiosRequestConfig = {
    headers: {
      'x-access-token': token,
    },
  };

  return axiosInstance.put(`/users/${id}`, userData, options).catch(handleErrorResponse);
};

// Función genérica para manejar errores de respuesta
function handleErrorResponse(error: any) {
  if (error.response) {
    const { status } = error.response;
    if (status === 401 || status === 403) {
      window.location.href = '/login';
    }
  }
  throw error;
}
