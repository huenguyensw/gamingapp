import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  

  it('should render some text "Hue, Liza, Nadya och Nikola"', () => {
    render(<Footer/>)
    const element = screen.getByText(/Hue, Liza, Nadya och Nikola/i)

    expect(element).toBeInTheDocument();

  });

  
});
