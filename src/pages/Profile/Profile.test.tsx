import Profile from '@pages/Profile/Profile.tsx';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('Profile', () => {
    it('renders Profile', () => {
        render(<Profile />);
    });
});
