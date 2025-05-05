import HeaderView from '@components/Header/Header.view.tsx';
import { USER } from '@constants/constant.ts';
import type { JSX } from 'react';
import { useState } from 'react';

const HeaderContainer = (): JSX.Element => {
    const [user, setUser] = useState<string | null>(USER);
    const handleLogout = (): void => setUser(null);

    return <HeaderView user={user} onLogout={handleLogout} />;
};

export default HeaderContainer;
