import { ROUTE_PATH } from '@routes/constants/routes.constant.ts';
import { useUserStore } from '@store/store.ts';
import type { JSX } from 'react';
import { Navigate, Outlet } from 'react-router';

const ProtectedRoute = (): JSX.Element => {
    const isLoggedIn = useUserStore((state) => state.isLoggedIn);

    return isLoggedIn ? <Navigate to={ROUTE_PATH.MAIN} /> : <Outlet />;
};

export default ProtectedRoute;
