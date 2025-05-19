import Popover from '@components/Popover/Popover.tsx';
import { useUserStore } from '@store/login.store.ts';
import { JSX, useEffect, useState } from 'react';

const LoginPopover = (): JSX.Element => {
    const isLoggedIn = useUserStore((state) => state.isLoggedIn);
    const loggedInErrorMessage = useUserStore((state) => state.loggedInErrorMessage);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (isLoggedIn) {
            setShowModal(true);

            setTimeout(() => {
                setShowModal(false);
            }, 3000);
        }
    }, [isLoggedIn]);

    useEffect(() => {
        if (loggedInErrorMessage) {
            setShowModal(true);

            setTimeout(() => {
                setShowModal(false);
            }, 3000);
        }
    }, [loggedInErrorMessage]);

    return (
        <Popover
            showModal={showModal}
            message={isLoggedIn ? 'Login successfully' : (loggedInErrorMessage ?? '')}
            className={isLoggedIn ? 'successLogin' : loggedInErrorMessage ? 'errorLogin' : ''}
        />
    );
};

export default LoginPopover;
