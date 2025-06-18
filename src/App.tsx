import Header from '@components/Header/Header.tsx';
import { AboutUsView } from '@pages/AboutUs/AboutUsView';
import { LoginContainer } from '@pages/Login/LoginContainer';
import { Main } from '@pages/Main/Main.tsx';
import { NotFound } from '@pages/NotFound/NotFound.tsx';
import { ProductDetailedContainer } from '@pages/ProductDetailed/ProductDetailedContainer';
import ProductsContainer from '@pages/Products/ProductsContainer';
import Profile from '@pages/Profile/Profile.tsx';
import { RegisterContainer } from '@pages/Register/RegisterContainer.tsx';
import { ShoppingCartContainer } from '@pages/ShoppingCart/ShoppingCartContainer';
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
                        <Route path={`${ROUTE_PATH.PRODUCTS}/:id`} element={<ProductDetailedContainer />} />
                        <Route path={ROUTE_PATH.PRODUCTS} element={<ProductsContainer />} />
                        <Route path={ROUTE_PATH.LOGIN} element={<LoginContainer />} />
                        <Route path={ROUTE_PATH.REGISTER} element={<RegisterContainer />} />
                        <Route path={ROUTE_PATH.SHOPPINGCARD} element={<ShoppingCartContainer />} />
                        <Route element={<ProtectedRoute />}>
                            <Route path={ROUTE_PATH.PROFILE} element={<Profile />} />
                        </Route>
                        <Route path={ROUTE_PATH.ABOUTUS} element={<AboutUsView />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    );
}

export default App;
