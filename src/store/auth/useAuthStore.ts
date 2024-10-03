import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  User,
} from 'firebase/auth';
import { create } from 'zustand';
import { firebaseConfig } from './firebase.config';
// await createUserWithEmailAndPassword(
//   auth,
//   values.email!,
//   values.password!
// );
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

interface IAuthCredentials {
  email: string;
  password: string;
}

interface IAuthStore {
  user: User | null;
  setUser: (user: any) => void;
  login: ({ email, password }: IAuthCredentials) => Promise<void>;
  signUp: ({ email, password }: IAuthCredentials) => Promise<void>;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  user: null,
  login: async ({ email, password }: IAuthCredentials) => {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
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
}));
