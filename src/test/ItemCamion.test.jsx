import { render } from "@testing-library/react";
import { ItemCamion } from "../Common/MenuCamiones/ItemCamion";

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

jest.mock("../../Hooks/CRUDHook", () => ({
  useListarElementos: jest.fn(() => jest.fn()),
}));


describe("ItemCamion", () => {
  test("Probando Renderizado correcto del Item", () => {
    const placa = "ABC-123";
    const { getByText } = render(<ItemCamion placa={placa} />);
    expect(getByText(placa)).toBeInTheDocument();
  });
});
