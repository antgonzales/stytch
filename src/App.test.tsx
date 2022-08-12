import React from 'react';
import { render, screen, fireEvent } from './testUtils';
import App from './App';

describe('<App />', () => {
  it('searches for Star Wars people', async () => {
    render(<App />);
    const textInput = screen.getByLabelText(/Search people input/i);
    fireEvent.change(textInput, {target: {value: 'r2'}});
    expect(await screen.findByText('R2-D2')).toBeInTheDocument();
  });
});
