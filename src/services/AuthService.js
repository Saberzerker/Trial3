import api from '../config/api';

export const login = async (credentials) => {
    try {
        const response = await api.post('/auth/login', credentials);
        localStorage.setItem('user', JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'An error occurred during login' };
    }
};

export const register = async (userData) => {
    try {
        const response = await api.post('/auth/register', userData);
        localStorage.setItem('user', JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'An error occurred during registration' };
    }
};

export const logout = () => {
    localStorage.removeItem('user');
};

export const getCurrentUser = () => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
        return JSON.parse(userStr);
    }
    return null;
};