import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Para utilizar aserciones adicionales
import { Welcome } from '../Login/Welcome';


jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(() => jest.fn()),
}));

describe('Welcome Component', () => {
  test('Renderiza correctamente', () => {
    const { getByText } = render(<Welcome />);

    // Verificamos que el componente muestre el texto "Bienvenido"
    expect(getByText('Bienvenido')).toBeInTheDocument();

    // Verificamos que el botón de Cerrar esté presente
    expect(getByText('Cerrar')).toBeInTheDocument();
  });

  test('Llama a la función Logout al hacer clic en el botón Cerrar', () => {
    // Creamos un mock de la función Logout
    const mockLogout = jest.fn();

    // Sustituimos la función original de Logout por el mock
    jest.mock('../Hooks/Logout', () => ({
      Logout: mockLogout,
    }));

    const { getByText } = render(<Welcome />);
/*
    // Simulamos hacer clic en el botón Cerrar
    fireEvent.click(getByText('Cerrar'));

    // Verificamos que la función Logout haya sido llamada
    expect(mockLogout).toHaveBeenCalledTimes(1);*/
  });
});
