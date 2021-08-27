import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the correct component', () => {
  const { getByText, getAllByText, get } = render(<App />);

  expect(getByText('Minutes')).not.toBeNull();
  expect(getByText('Seconds')).not.toBeNull();
  expect(getByText('Hours')).not.toBeNull();
  expect(getByText('Days')).not.toBeNull();
  expect(getAllByText('00')).not.toBeNull();
  expect(getAllByText('0')).not.toBeNull();
});
