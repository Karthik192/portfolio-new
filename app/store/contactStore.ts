import { create } from "zustand";

interface ContactState {
  email: string;
  message: string;
  setEmail: (value: string) => void;
  setMessage: (value: string) => void;
}

export const useContactStore = create<ContactState>((set) => ({
  email: "",
  message: "",
  setEmail: (value: string) => set({ email: value }),
  setMessage: (value: string) => set({ message: value }),
}));

export default useContactStore;
