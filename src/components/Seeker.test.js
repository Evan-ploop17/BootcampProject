import { render, screen, fireEvent } from '@testing-library/react';
import { prettyDOM } from '@testing-library/react';
import Seeker from './Seeker';

const mockHandler = jest.fn();

test('The word exist', () => {
    render(<Seeker />);
    const wordElement = screen.getByTestId('seeker')
    wordElement.innerHTML = 'cafe';
    const linkElement = screen.getByText(/cafe/i);
    expect(linkElement).toBeInTheDocument();
});

test('Clicking submit button', () => {
    render(<Seeker />);
    const btn = screen.getByDisplayValue('buscar...');
    console.log(prettyDOM(btn));
    //fireEvent.click(btn);
});
