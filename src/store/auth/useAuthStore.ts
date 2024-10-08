import { create } from "zustand";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(); // Імпортуємо Firebase auth

interface IAuthStore {
  user: any;
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
    const { user } = await createUserWithEmailAndPassword(auth, email, password); // Використовуємо об'єкт auth
    set({ user });
  },
}));
