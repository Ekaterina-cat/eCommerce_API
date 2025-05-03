import HeaderContainer from '@components/Header/Header.container.tsx';
import { Login } from '@pages/Login.tsx';
import { Main } from '@pages/Main.tsx';
import { NotFound } from '@pages/NotFound.tsx';
import { Register } from '@pages/Register.tsx';
import { ROUTE_PATH } from '@routes/constants/routes.constant.ts';
import ProtectedRoute from '@routes/guards/ProtectedRoute.tsx';
import type { JSX } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

function App(): JSX.Element {
    return (
        <>
            <BrowserRouter>
                <HeaderContainer />
                <main className="main-container">
                    <Routes>
                        <Route path={ROUTE_PATH.MAIN} element={<Main />} />
                        <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFound />} />
                        <Route element={<ProtectedRoute />}>
                            <Route path={ROUTE_PATH.LOGIN} element={<Login />} />
                            <Route path={ROUTE_PATH.REGISTER} element={<Register />} />
                        </Route>
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    );
}

export default App;
