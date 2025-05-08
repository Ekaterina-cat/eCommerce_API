import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@components/ui/navigation-menu.tsx';
import { ROUTE_PATH } from '@routes/constants/routes.constant.ts';
import { useUserStore } from '@store/store.ts';
import type { JSX } from 'react';

interface HeaderViewProps {
    onLogout: () => void;
}

const HeaderView = ({ onLogout }: HeaderViewProps): JSX.Element => {
    const isLoggedIn = useUserStore((state) => state.isLoggedIn);

    return (
        <header className="header">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink to={ROUTE_PATH.MAIN}>Main</NavigationMenuLink>
                    </NavigationMenuItem>
                    {isLoggedIn ? (
                        <button onClick={onLogout}>Logout</button>
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
        </header>
    );
};

export default HeaderView;
