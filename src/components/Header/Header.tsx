import LoginPopover from '@components/LoginPopover/LoginPopover.tsx';
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from '@components/ui/NavigationMenu.tsx';
import { ROUTE_PATH } from '@routes/constants/routes.ts';
import { useUserStore } from '@store/login.store.ts';
import type { JSX } from 'react';

const Header = (): JSX.Element => {
    const updateIsLoggedIn = useUserStore((state) => state.updateIsLoggedIn);
    const handleLogout = (): void => updateIsLoggedIn(false);
    const isLoggedIn = useUserStore((state) => state.isLoggedIn);

    return (
        <header className="header">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuLink to={ROUTE_PATH.PROFILE}>Products</NavigationMenuLink>
                    {isLoggedIn ? (
                        <>
                            <NavigationMenuLink to={ROUTE_PATH.PROFILE}>Profile</NavigationMenuLink>
                            <button className="logout" onClick={handleLogout}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <NavigationMenuLink to={ROUTE_PATH.LOGIN}>Login</NavigationMenuLink>
                            <NavigationMenuLink to={ROUTE_PATH.REGISTER}>Register</NavigationMenuLink>
                        </>
                    )}
                </NavigationMenuList>
            </NavigationMenu>
            <LoginPopover />
        </header>
    );
};

export default Header;
