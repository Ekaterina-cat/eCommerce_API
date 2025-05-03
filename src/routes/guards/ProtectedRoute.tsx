import { ROUTE_PATH } from '@routes/constants/routes.constant.ts';
import type { JSX } from 'react';
import { Navigate, Outlet } from 'react-router';

const ProtectedRoute = (): JSX.Element => {
    const user = null;

    return user ? <Navigate to={ROUTE_PATH.MAIN} /> : <Outlet />;
};

export default ProtectedRoute;
