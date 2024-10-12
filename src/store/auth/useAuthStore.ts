import { create } from "zustand";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  User,
} from "firebase/auth";
import { auth } from "./firebase.config";

interface IAuthStore {
  user: User | null;
  setUser: (user: any) => void;
  login: ({ email, password }: IAuthCredentials) => Promise<void>;
  signUp: ({ email, password }: IAuthCredentials) => Promise<void>;
}

interface IAuthCredentials {
  email: string;
  password: string;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  user: null,

  setUser: (user: any) => set({ user }),

  login: async ({ email, password }: IAuthCredentials) => {
    const { user } = await signInWithEmailAndPassword(auth, email, password); // Використовуємо об'єкт auth
    set({ user });
  },

  signUp: async ({ email, password }: IAuthCredentials) => {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ); // Використовуємо об'єкт auth
    set({ user });
  },
}));
