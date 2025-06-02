import LoginPopover from '@components/LoginPopover/LoginPopover.tsx';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@components/ui/NavigationMenu.tsx';
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
                    <NavigationMenuItem>
                        <NavigationMenuLink to={ROUTE_PATH.MAIN}>Main</NavigationMenuLink>
                    </NavigationMenuItem>
                    {isLoggedIn ? (
                        <button onClick={handleLogout}>Logout</button>
                    ) : (
                        <>
                            <NavigationMenuItem>
                                <NavigationMenuLink to={ROUTE_PATH.LOGIN}>Login</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink to={ROUTE_PATH.REGISTER}>Register</NavigationMenuLink>
                            </NavigationMenuItem>
                        </>
                    )}
                </NavigationMenuList>
            </NavigationMenu>
            <LoginPopover />
        </header>
    );
};

export default Header;
