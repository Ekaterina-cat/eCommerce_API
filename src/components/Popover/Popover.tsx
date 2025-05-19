import { JSX } from 'react/jsx-runtime';
import { createPortal } from 'react-dom';

const Popover = ({
    showModal,
    message,
    className,
}: {
    showModal: boolean;
    message: string;
    className: string;
}): JSX.Element => {
    const finalClassName = `popover ${className}`;

    return <>{showModal && createPortal(<div className={finalClassName}>{message}</div>, document.body)}</>;
};

export default Popover;
