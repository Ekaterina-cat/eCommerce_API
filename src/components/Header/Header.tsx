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
                    <NavigationMenuItem>
                        <NavigationMenuLink to={ROUTE_PATH.ABOUTUS}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="Layer_1"
                                data-name="Layer 1"
                                viewBox="0 0 24 24"
                                width="512"
                                height="512"
                            >
                                <path
                                    fill="#808080"
                                    d="M12,17a4,4,0,1,1,4-4A4,4,0,0,1,12,17Zm6,4a3,3,0,0,0-3-3H9a3,3,0,0,0-3,3v3H18ZM18,8a4,4,0,1,1,4-4A4,4,0,0,1,18,8ZM6,8a4,4,0,1,1,4-4A4,4,0,0,1,6,8Zm0,5A5.968,5.968,0,0,1,7.537,9H3a3,3,0,0,0-3,3v3H6.349A5.971,5.971,0,0,1,6,13Zm11.651,2H24V12a3,3,0,0,0-3-3H16.463a5.952,5.952,0,0,1,1.188,6Z"
                                />
                            </svg>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <LoginPopover />
        </header>
    );
};

export default Header;
