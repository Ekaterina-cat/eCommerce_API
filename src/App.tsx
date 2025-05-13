import Header from '@components/Header/Header.tsx';
import { LoginContainer } from '@pages/Login/LoginContainer';
import { Main } from '@pages/Main/Main.tsx';
import { NotFound } from '@pages/NotFound/NotFound.tsx';
import { RegisterContainer } from '@pages/Registerr/RegisterContainer.tsx';
import { ROUTE_PATH } from '@routes/constants/routes.ts';
import ProtectedRoute from '@routes/guards/ProtectedRoute.tsx';
import type { JSX } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

function App(): JSX.Element {
    return (
        <>
            <BrowserRouter>
                <Header />
                <main className="main-container">
                    <Routes>
                        <Route path={ROUTE_PATH.MAIN} element={<Main />} />
                        <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFound />} />
                        <Route element={<ProtectedRoute />}>
                            <Route path={ROUTE_PATH.LOGIN} element={<LoginContainer />} />
                            <Route path={ROUTE_PATH.REGISTER} element={<RegisterContainer />} />
                        </Route>
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    );
}

export default App;
