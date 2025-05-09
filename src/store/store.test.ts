import { describe, it, expect, beforeEach } from 'vitest';
import { useUserStore } from '@store/store.ts';

describe('useUserStore', () => {
    beforeEach(() => {
        useUserStore.setState({
            isLoggedIn: false,
            loggedInErrorMessage: '',
        });
    });

    it('should have initial state', () => {
        const state = useUserStore.getState();
        expect(state.isLoggedIn).toBe(false);
        expect(state.loggedInErrorMessage).toBe('');
    });

    it('should update isLoggedIn', () => {
        useUserStore.getState().updateIsLoggedIn(true);
        expect(useUserStore.getState().isLoggedIn).toBe(true);
    });

    it('should update loggedInErrorMessage', () => {
        useUserStore.getState().updateLoggedInErrorMessage('errorMessage');
        expect(useUserStore.getState().loggedInErrorMessage).toBe('errorMessage');
    });
});
