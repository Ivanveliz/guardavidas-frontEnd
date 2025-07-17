export interface User {
    id: number;
    nombre: string;
    apellido: string;
    tel: string;
    predio: string;
    direccion: string;
    numeroLibreta: number;
    role: 'AdminGneral' | 'Admin' | 'Usuario';
    cargo: string;
    email: string;
}
