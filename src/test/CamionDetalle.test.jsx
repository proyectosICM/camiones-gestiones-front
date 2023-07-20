import { render } from "@testing-library/react";
import { CamionDetalle } from "../Common/MenuCamiones/CamionDetalle";

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

describe("CamionDetalle", () => {
  test("Probando renderizado de CamionDetalle", () => {
    const { getByText } = render(<CamionDetalle />);
    expect(getByText("Placa")).toBeInTheDocument();
    expect(getByText("Marca")).toBeInTheDocument();
    expect(getByText("Modelo")).toBeInTheDocument();
  });
});
