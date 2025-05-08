import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@components/ui/navigation-menu.tsx';
import { ROUTE_PATH } from '@routes/constants/routes.constant.ts';
import type { JSX } from 'react';

export const Main = (): JSX.Element => {
    return (
        <>
            <div>Main</div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink to={ROUTE_PATH.LOGIN}>Login</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink to={ROUTE_PATH.REGISTER}>Register</NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    );
};
