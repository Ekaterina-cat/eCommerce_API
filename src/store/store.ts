import { create } from 'zustand/react';

type State = {
    isLoggedIn: boolean;
};

type Action = {
    updateIsLoggedIn: (isLoggedIn: State['isLoggedIn']) => void;
};

export const useUserStore = create<State & Action>((set) => ({
    isLoggedIn: false,
    updateIsLoggedIn: (isLoggedIn): void => set(() => ({ isLoggedIn: isLoggedIn })),
}));
