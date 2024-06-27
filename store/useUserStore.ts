import { create } from "zustand";

import { persist, createJSONStorage } from "zustand/middleware";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { User, Session } from "@supabase/supabase-js";

interface UserStore {
  user: User | null;
  session: Session | null;
  setUser: (user: User | null) => void;
  setSession: (session: Session | null) => void;
  isLoggedIn: Boolean;
  setIsLoggedIn: (isLoggedIn: Boolean) => void;
}

export const useUserStore = create(
  persist<UserStore>((set) => ({
    user: null,
    session: null,
    isLoggedIn: false,
    isOnboarded: false,
    setUser: (user: User | null) => set((state) => ({ user })),
    setSession: (session: Session | null) => set((state) => ({ session })),
    setIsLoggedIn: (isLoggedIn: Boolean) => set((state) => ({ isLoggedIn })),
  }),{
    name:"user-store",
    storage: createJSONStorage(()=>AsyncStorage),

  })
);
