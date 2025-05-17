import { ROUTE_PATH } from '@routes/constants/routes';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it } from 'vitest';

import { RegistrationFormContainer } from '../RegistrationFormContainer';

describe('RegistrationFormContainer', () => {
    it('renders RegistrationFormContainer', () => {
        render(
            <MemoryRouter initialEntries={[ROUTE_PATH.REGISTER]}>
                <RegistrationFormContainer />
            </MemoryRouter>,
        );
    });
});
