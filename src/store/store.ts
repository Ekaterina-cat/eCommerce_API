import { create } from 'zustand/react';

type State = {
    isLoggedIn: boolean;
    loggedInErrorMessage: string;
};

type Action = {
    updateIsLoggedIn: (isLoggedIn: State['isLoggedIn']) => void;
    updateLoggedInErrorMessage: (loggedInErrorMessage: State['loggedInErrorMessage']) => void;
};

export const useUserStore = create<State & Action>((set) => ({
    isLoggedIn: false,
    loggedInErrorMessage: '',
    updateIsLoggedIn: (isLoggedIn): void => set(() => ({ isLoggedIn: isLoggedIn })),
    updateLoggedInErrorMessage: (loggedInErrorMessage): void =>
        set(() => ({ loggedInErrorMessage: loggedInErrorMessage })),
}));
