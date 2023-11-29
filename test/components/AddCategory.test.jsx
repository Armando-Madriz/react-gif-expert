import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => { 
    test('Debe de cambiar el valor de la caja de texto', () => { 
        
        render(<AddCategory onNewCategory={ () => {} } />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Saitama' } });
        expect( input.value ).toBe('Saitama');
        // screen.debug();
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => { 
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );

        expect( input.value ).toBe(''); //Se espera que vuelva vacío despues del submit
        expect( onNewCategory ).toHaveBeenCalledTimes(1); //se espera que se haya llamado una vez
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue ); //se espera que se haya llamado con el inputvalue

    });

    test('no debe llamar el onNewCategory si el input está vacío', () => { 
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);
        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0); //se espera que no se haya llamado
        expect( onNewCategory ).not.toHaveBeenCalled(); //se espera que no se haya llamado
    });
 });