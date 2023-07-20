import { render } from "@testing-library/react";
import { MenuCamiones } from "../Common/MenuCamiones/MenuCamiones";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));
 
describe("Menu Camiones", () => {
  test("Renderiza correctamente el menu", () => {
    const { getByText } = render(<MenuCamiones />);
    expect(getByText("Lista de camiones")).toBeInTheDocument();
  });
});
