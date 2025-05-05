import HeaderView from '@components/Header/Header.view.tsx';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('HeaderView', () => {
    it('renders HeaderView', () => {
        render(<HeaderView user={'test'} onLogout={() => null} />);
    });
});
