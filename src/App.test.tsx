import { render, waitFor } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('should render the app successfully', () => {
    waitFor(() => {
      render(<App />);
    });
  });
});
