import RegistrationFormContainer from '@components/RegistrationForm/RegistrationFormContainer.tsx';
import { ROUTE_PATH } from '@routes/constants/routes';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it } from 'vitest';

describe('RegistrationFormContainer', () => {
    it('renders RegistrationFormContainer', () => {
        render(
            <MemoryRouter initialEntries={[ROUTE_PATH.REGISTER]}>
                <RegistrationFormContainer />
            </MemoryRouter>,
        );
    });
});
