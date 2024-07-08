import { useTranslation } from 'react-i18next';

import { render } from '@testing-library/react';

import ExamplePage from './ExamplePage';

jest.mock('react-i18next');

describe('ExamplePage', () => {
  beforeEach(() => {
    mockTranslation(useTranslation as jest.Mock);
  });

  it('should render the ExamplePage successfully', () => {
    render(<ExamplePage />);
  });
});
