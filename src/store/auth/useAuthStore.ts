// useAuthStore.ts
import { create } from 'zustand';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  User,
  updateProfile,
} from 'firebase/auth';
import { auth, db } from './firebase.config'; // Імпортуємо auth та db з firebase.config
import { doc, updateDoc } from 'firebase/firestore';

interface IAuthStore {
  user: User | null;
  setUser: (user: any) => void;
  login: ({ email, password }: IAuthCredentials) => Promise<void>;
  signUp: ({ email, password }: IAuthCredentials) => Promise<void>;
  updateUserProfile: ({ phoneNumber }: { phoneNumber: string }) => Promise<void>;
}

interface IAuthCredentials {
  email: string;
  password: string;
}

export const useAuthStore = create<IAuthStore>((set, get) => ({
  user: null,

  setUser: (user: User) => set({ user }),

  login: async ({ email, password }: IAuthCredentials) => {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
    set({ user });
  },

  signUp: async ({ email, password }: IAuthCredentials) => {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    set({ user });
  },

  updateUserProfile: async ({ phoneNumber }: { phoneNumber: string }) => {
    const currentUser = get().user as User;
    console.log(phoneNumber)
    // Оновлюємо номер телефону у Firestore
    const userDocRef = doc(db, 'users', currentUser.uid); // Отримуємо документ користувача
    await updateDoc(userDocRef, {
      phoneNumber, // Оновлюємо номер телефону у Firestore
    });
  },
}));

