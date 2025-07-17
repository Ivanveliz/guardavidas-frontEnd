import type { User } from '../types/Users';

const URL = import.meta.env.VITE_API_URL;

export const enterLogin = async (
    email: string,
    password: string,
): Promise<{ user: User; token: string }> => {
    const res = await fetch(`${URL}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Error en el login');
    }
    const data = await res.json();
    return data;
};
