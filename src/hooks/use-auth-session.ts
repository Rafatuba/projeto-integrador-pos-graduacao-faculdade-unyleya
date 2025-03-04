import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthSessionType = {
  token: string;
  setToken: (novoToken: string) => void;
  clearToken: () => void;
};

export const useAuthSessionStore = create<AuthSessionType>()(
  persist(
    (set) => ({
      token: "",
      setToken: (novoToken) => set({ token: novoToken }),
      clearToken: () => set({ token: "" }),
    }),
    {
      name: "@auth-session-store",
    }
  )
);
