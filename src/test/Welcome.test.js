import { render, screen } from "@testing-library/react";
import { Welcome } from "../Login/Welcome";

describe('Welcome', () => {
    test('Verificando mensaje de bienvenida', () => {
        render(<Welcome />)
        expect(screen.getByText('Bienvenido')).toBeInTheDocument();
    })
});