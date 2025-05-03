import { Login } from '@pages/Login.tsx';
import { Main } from '@pages/Main.tsx';
import { Register } from '@pages/Register.tsx';
import type { JSX } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/main" element={<Main />} />
                {/*<Route path="/" element={<NotFound />} />*/}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
