import type { User } from "../types/Users";
// Simula un inicio de sesión con credenciales fijas
export const fakeLogin = async (email: string, password: string): Promise<{ token: string; user: User }> => {
    return new Promise((respond, reject) => {
        if (email === 'prueba@gmail.com' && password === '1234') {
            respond({
                token: "fake-jbw-token",
                 user: {
                    id: 1,
                    nombre: 'Ivan',
                    apellido: 'Veliz',
                    tel: '123123123',
                    predio: 'Florida',
                    direccion: 'Viamonte 123',
                    numeroLibreta: 12312312,
                    role: "admin",
                    cargo: 'Director',
                    email: 'prueba@gmail.com'
                    
                    
                    
        },
            });
        }
        else {
            reject(new Error('Credenciales Inválidas'))
        }
    }
    )
}
