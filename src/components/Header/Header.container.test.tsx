import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import HeaderContainer from './Header.container';

describe('HeaderContainer', () => {
    it('calls HeaderView ', () => {
        render(<HeaderContainer />);
    });
});
