import { USER } from '@constants/constant.ts';
import { ROUTE_PATH } from '@routes/constants/routes.constant.ts';
import type { JSX } from 'react';
import { Navigate, Outlet } from 'react-router';

const ProtectedRoute = (): JSX.Element => {
    return USER ? <Navigate to={ROUTE_PATH.MAIN} /> : <Outlet />;
};

export default ProtectedRoute;
