import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import { Main } from './Main.tsx';

describe('Main', () => {
    it('renders Main', () => {
        render(<Main />);
    });
});
