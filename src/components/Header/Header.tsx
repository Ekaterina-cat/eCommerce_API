import LoginPopover from '@components/LoginPopover/LoginPopover.tsx';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@components/ui/NavigationMenu.tsx';
import { IconCartSvg } from '@constants/Constant';
import { ROUTE_PATH } from '@routes/constants/routes.ts';
import { useUserStore } from '@store/login.store.ts';
import type { JSX } from 'react';

const Header = (): JSX.Element => {
    const updateIsLoggedIn = useUserStore((state) => state.updateIsLoggedIn);
    const handleLogout = (): void => updateIsLoggedIn(false);
    const isLoggedIn = useUserStore((state) => state.isLoggedIn);

    return (
        <header className="header">
            <div className="flex items-center justify-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Fresh food
            </div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink to={ROUTE_PATH.PRODUCTS}>Products</NavigationMenuLink>
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
                            <NavigationMenuItem>
                                <NavigationMenuLink to={ROUTE_PATH.SHOPPINGCARD}>
                                    <div className="rounded-full bg-white p-1">
                                        <IconCartSvg />
                                    </div>
                                </NavigationMenuLink>
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
