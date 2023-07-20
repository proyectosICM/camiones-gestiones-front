import { render } from "@testing-library/react";
import { Welcome } from "../Login/Welcome";

// Mock de useNavigate y Logout
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

jest.mock('../Hooks/Logout', () => ({
  Logout: jest.fn(),
}));

// Mock manual de axios
jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('Welcome Component', () => {
  test('Renderiza correctamente', async () => {
    // Simular el valor almacenado en el LocalStorage
    localStorage.setItem('Username', 'Usuario de Prueba');
    localStorage.setItem('token', 'Token de Prueba');

    const { getByText } = render(<Welcome />);
    expect(getByText('Bienvenido Usuario de Prueba')).toBeInTheDocument();
    expect(getByText('Cerrar')).toBeInTheDocument();
    // Esperar a que se realice la petición de axios y se actualice el componente

  });
});
