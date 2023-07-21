import { render } from "@testing-library/react";
import { CheckListConductor } from "../VistaConductor/CheckListConductor";

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

describe("CheckListConductor", () => {
  test("Verificar renderizado del CheckList", () => {
    const { getByText } = render(<CheckListConductor />);
    expect(getByText("Marque si esta en buen o en mal estado:")).toBeInTheDocument();
  });
}); 
