import { create } from 'zustand';

interface UserState {
  isLoggedIn: boolean;
  username: string | null;
  masteryLevel: number;
  learningPath: string[];
  setLogin: (name: string) => void;
  logout: () => void;
  updateMastery: (level: number) => void;
}

export const useMasteryStore = create<UserState>((set) => ({
  isLoggedIn: false,
  username: null,
  masteryLevel: 0,
  learningPath: ['Intro to AI', 'Prompt Engineering', 'RAG Architectures'],
  setLogin: (name) => set({ isLoggedIn: true, username: name }),
  logout: () => set({ isLoggedIn: false, username: null }),
  updateMastery: (level) => set({ masteryLevel: level }),
}));
