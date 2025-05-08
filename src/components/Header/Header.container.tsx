import HeaderView from '@components/Header/Header.view.tsx';
import { useUserStore } from '@store/store.ts';
import type { JSX } from 'react';

const HeaderContainer = (): JSX.Element => {
    const updateIsLoggedIn = useUserStore((state) => state.updateIsLoggedIn);
    const handleLogout = (): void => updateIsLoggedIn(false);

    return <HeaderView onLogout={handleLogout} />;
};

export default HeaderContainer;
