import { fakeUsers } from "../data/fakeUsers";
import type { User } from "../types/Users";

export const fethFakeUsers = async (): Promise<User[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fakeUsers)
        },500)
    })
}