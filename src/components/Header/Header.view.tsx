import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@components/ui/navigation-menu.tsx';
import { ROUTE_PATH } from '@routes/constants/routes.constant.ts';
import type { JSX } from 'react';

interface HeaderViewProps {
    user: string | null;
    onLogout: () => void;
}

const HeaderView = ({ user, onLogout }: HeaderViewProps): JSX.Element => {
    return (
        <header className="header">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink href={ROUTE_PATH.MAIN}>Main</NavigationMenuLink>
                    </NavigationMenuItem>
                    {user ? (
                        <button onClick={onLogout}>Logout</button>
                    ) : (
                        <>
                            <NavigationMenuItem>
                                <NavigationMenuLink href={ROUTE_PATH.LOGIN}>Login</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href={ROUTE_PATH.REGISTER}>Register</NavigationMenuLink>
                            </NavigationMenuItem>
                        </>
                    )}
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
};

export default HeaderView;
