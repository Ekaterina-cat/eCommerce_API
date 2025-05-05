import * as constantModule from '@constants/constant';
import { render } from '@testing-library/react';
import { describe, it, vi } from 'vitest';

import ProtectedRoute from './ProtectedRoute';

vi.mock('react-router', () => ({
    Navigate: vi.fn(() => null),
    Outlet: vi.fn(() => null),
}));

vi.mock('@constants/constant', () => ({
    USER: null,
}));

describe('ProtectedRoute', () => {
    it('should render Outlet when USER is false', () => {
        render(<ProtectedRoute />);
    });

    it('should redirect to main route when USER is true', () => {
        vi.spyOn(constantModule, 'USER', 'get').mockReturnValue('Test');

        render(<ProtectedRoute />);
    });
});
