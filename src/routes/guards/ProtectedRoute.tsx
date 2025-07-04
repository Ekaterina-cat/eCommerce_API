import { ROUTE_PATH } from '@routes/constants/routes.ts';
import { useUserStore } from '@store/login.store.ts';
import type { JSX } from 'react';
import { Navigate, Outlet } from 'react-router';

const ProtectedRoute = (): JSX.Element => {
    const isLoggedIn = useUserStore((state) => state.isLoggedIn);

    return isLoggedIn ? <Outlet /> : <Navigate to={ROUTE_PATH.MAIN} />;
};

export default ProtectedRoute;
