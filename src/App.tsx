import { Header } from '@components/Header.tsx';
import { Login } from '@pages/Login.tsx';
import { Main } from '@pages/Main.tsx';
import { Register } from '@pages/Register.tsx';
import type { JSX } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

function App(): JSX.Element {
    return (
        <>
            <BrowserRouter>
                <Header />
                <main className="container mx-auto py-6 px-4 md:px-6">
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/main" element={<Main />} />
                        {/*<Route path="/" element={<NotFound />} />*/}
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    );
}

export default App;
