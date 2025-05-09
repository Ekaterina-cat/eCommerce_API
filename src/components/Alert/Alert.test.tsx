import { Alert } from '@components/Alert/Alert.tsx';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('Alert', () => {
    it('renders Alert', () => {
        render(<Alert errorMessage={'errorMessage'} />);
    });
});
