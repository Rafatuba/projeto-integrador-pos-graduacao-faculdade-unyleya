import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthSessionType = {
  token: string;
  setToken: (novoToken: string) => void;
};

export const useAuthSessionStore = create<AuthSessionType>()(
  persist(
    (set) => ({
      token: "",
      setToken: (novoToken) => set({ token: novoToken }),
    }),
    {
      name: "@auth-session-store",
    }
  )
);
