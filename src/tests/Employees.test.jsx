import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import App from '../App';
import Provider from '../context/Provider';

describe('Test', () => {
  render(
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();
});
