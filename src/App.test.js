import { render, screen } from '@testing-library/react';
import { Routes, Route } from 'react-router-dom'; // Import the Routes and Route components
import App from './App';

test('renders learn react link', () => {
  render(
    <Routes>
      <Route path="/">
        <App />
      </Route>
    </Routes>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
