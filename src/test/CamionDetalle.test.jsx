import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CamionDetalle } from "../Common/MenuCamiones/CamionDetalle";

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

// Mock manual de useListarElementos
jest.mock("../../Hooks/CRUDHook", () => ({
  useListarElementos: jest.fn(() => jest.fn()),
}));

describe("CamionDetalle", () => {
  beforeEach(() => {
    // Simulamos que el localStorage contiene la información del camión
    localStorage.setItem("dataCamion", "id_del_camion");
    // Simulamos el retorno de useListarElementos con un camión de prueba
    const mockCamion = {
      placa: "ABC123",
      marcasModel: { nombre: "Marca de prueba" },
      modeloModel: { nombre: "Modelo de prueba" },
    };
    const mockListarCamion = jest.fn((url, setData) => setData(mockCamion));
    require("../../Hooks/CRUDHook").useListarElementos = jest.fn(() => mockListarCamion);
  });

  afterEach(() => {
    localStorage.clear();
  });

  test("Probando renderizado de CamionDetalle", () => {
    render(<CamionDetalle />);
    // Verificamos que los elementos esperados estén presentes en la pantalla
    expect(screen.getByText("Placa: ABC123")).toBeInTheDocument();
    expect(screen.getByText("Marca: Marca de prueba")).toBeInTheDocument();
    expect(screen.getByText("Modelo: Modelo de prueba")).toBeInTheDocument();
  });

  test("Probando la navegación hacia atrás para un conductor", () => {
    const mockNavigate = jest.fn();
    require("react-router-dom").useNavigate = () => mockNavigate;

    render(<CamionDetalle />);

    // Simulamos el click en el botón de "Atras"
    fireEvent.click(screen.getByText("Atras"));

    // Verificamos que la función navigate se haya llamado correctamente con la ruta esperada
    expect(mockNavigate).toHaveBeenCalledWith("/verificar-vehiculo");
  });

  test("Probando la navegación hacia atrás para un mecánico", () => {
    localStorage.setItem("rol", "MECANICO");
    const mockNavigate = jest.fn();
    require("react-router-dom").useNavigate = () => mockNavigate;

    render(<CamionDetalle />);

    // Simulamos el click en el botón de "Atras"
    fireEvent.click(screen.getByText("Atras"));

    // Verificamos que la función navigate se haya llamado correctamente con la ruta esperada
    expect(mockNavigate).toHaveBeenCalledWith("/revisar-cheklist-conductor");
  });

  test("Probando la navegación hacia el checklist para un conductor", () => {
    const mockNavigate = jest.fn();
    require("react-router-dom").useNavigate = () => mockNavigate;

    render(<CamionDetalle />);

    // Simulamos el click en el botón de "Realizar CheckList"
    fireEvent.click(screen.getByText("Realizar CheckList"));

    // Verificamos que la función navigate se haya llamado correctamente con la ruta esperada
    expect(mockNavigate).toHaveBeenCalledWith("/checklist-conductor");
  });
});
