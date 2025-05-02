import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import App from './App.tsx';

describe('App', () => {
    it('renders App', () => {
        render(<App />);
    });
});
