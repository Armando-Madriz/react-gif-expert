import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => { 
    test('Debe de mostrar varias imagenes', async() => { 

        render(<GifExpertApp />);

        await waitFor(
            () => expect( screen.getAllByRole('img').length ).toBeGreaterThan(0),
        );

        expect( screen.getAllByRole('img').length ).toBeGreaterThan(0);
    });

    test('No debe agregar la categoría si ya existe', () => { 
        render(<GifExpertApp />);

        const inputValue = 'One Punch';
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );

        expect( screen.getAllByText(inputValue).length ).toBe(1);
    });
});