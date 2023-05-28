import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Prueba en <CounterApp />', () => {

  const value = 10;

  test('debe de hacer match con el snapshot', () => {

    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el valor inicial de 100', () => {
    /// Solo se necesitaba que apareciera el 100, no importa en que etiqueta ni si era del tipo numero. Solo se necesitaba que apareciera
    render(<CounterApp value={100} />);
    // option 1
    // expect(screen.getByText(valor)).toBeTruthy();
    // option 2
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100'); 
  });

  test('debe de incrementar con el botón +1', () => {

    render(<CounterApp value={value} />);
    fireEvent.click( screen.getByText('+1') ) // Este simula el del click en la etiqueta donde tenga el texto '+1'

    // Que deberia de suceder cuando haga click? Lo señalamos!
    expect(screen.getByText('11')).toBeTruthy();
  });

  test('debe de decrementar con el botón -1', () => {

    render(<CounterApp value={value} />);
    fireEvent.click( screen.getByText('-1') )
    expect(screen.getByText('9')).toBeTruthy();
  });

  test('debe de funcionar el botón de reset', () => {

    render(<CounterApp value={value} />);
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );

    // fireEvent.click( screen.getByText('Reset') ) Otra opción posible
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
    expect(screen.getByText('10')).toBeTruthy(); //toBeTruthy() > deberia estar en pantalla
  });
  
})  