import { render } from "@testing-library/react";
import { CheckListConductor } from "../VistaConductor/CheckListConductor";

describe('CheckListConductor', () => {
    test('Verificar renderizado del CheckList', () => {
        const { getByText } = render(<CheckListConductor />);
        expect(getByText('Reporte de conductor')).toBeInTheDocument();
    });
});