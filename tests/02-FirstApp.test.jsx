import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Prueba en <FirstApp />', () => {
  
  const title = 'Hola, Soy Kakaroto';
  const subTitle = 'Soy un subtítulo';

  test('debe de hacer match con el snapshot', () => {

    const { container, } = render( <FirstApp title={ title } />)
    expect(container).toMatchSnapshot();

  });

  test('debe de mostrar el mensaje "Hola, Soy Goku', () => {
    render(<FirstApp title={ title } />);
    // screen es el objeto que estamos renderizando, el html (por asi decirlo) renderizado
    expect(screen.getByText(title)).toBeTruthy();
    // screen.debug(); // Para mirar el html en la consola
  });

  test('debe de mostrar el título en un h1', () => {
    render(<FirstApp title={ title } />);
    expect( screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title)
  });

  test('debe de mostrar el subtítulo enviado por props', () => {
    render(
      <FirstApp
        title={ title }
        subTitle={ subTitle }
      />
    );
    // Buscamos todas las etiquetas que contengan title. getAllByText nos trae un array con las veces que aparece title
    expect(screen.getAllByText(subTitle).length).toBe(3)
  })
})