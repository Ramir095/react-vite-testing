import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Prueba en <FirstApp />', () => {

  // EL SNAPSHOT SOLAMENTE SE REALIZA CUANDO ES RARO ALGUN CAMBIO EN EL COMPONENTE. DURANTE EL DESARROLLO NO ES RECOMENDABLE HACERLO YA QUE HABRAN MUCHO CAMBIOS

  // test('debe de hacer match con el snapshot', () => {

  //   const title = 'Hola, Soy Kakaroto';
  //   const { container } = render( <FirstApp title={ title } />) // El RENDER que lo importamos de testing-library/react es una función REENDERIZA EL COMPONENTE EN MEMORIA. Es un nodo del DOM
  //   expect(container).toMatchSnapshot(); // Prueba que crea la carpeta "__snapshots__" donde se guarda una especie de captura del componente. Esta prueba se asegura de que mi componente no vaya a cambiar de manera accidental.
  // })

  test('debe de mostrar el título en un h1', () => {

    const title = 'Hola, Soy Kakaroto';
    const { container, getByText, getByTestId } = render( <FirstApp title={ title } />) // getByText analiza el texto del dom

    expect(getByText(title)).toBeTruthy();
    // toBeTruthy() que el texto TITLE se encuentre!. No envalua si ese texto esta en un h1, solo evalua si el texto esta!

    // IMPORTANTE! Evaluamos, ahora si, si la etiqueta es un H1!!
    // const h1 = container.querySelector('h1');
    // LOS EXPECT SON ASEVERACIONES.
    // expect(h1.innerHTML).toContain(title); // Con el toContain evaluamos el texto exista dentro del contenido solamente, sin importar los espacios o si tiene más textos adelante o atrás

    // Buscamos una etiqueta con un id especifico y evaluamos si su contenido es el mimsmo que "tltle"
    expect(getByTestId('test-title').innerHTML).toContain(title)

  })

  test('debe de mostrar el subtítulo enviado por props', () => {
    const title = 'Hola, Soy Goku';
    const subTitle = 'Soy un subtítulo';
    const { getAllByText } = render(
      <FirstApp
        title={ title }
        subTitle={ subTitle }
      />
    );
    // Buscamos todas las etiquetas que contengan title. getAllByText nos trae un array con las veces que aparece title
    expect(getAllByText(subTitle).length).toBe(3)
  })
})