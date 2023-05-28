import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {
  test('debe de retornar un string y un número', () => {
    const [letters, numbers] = retornaArreglo();
    expect(letters).toBe('ABC');
    expect(numbers).toBe(123);

    // Primer forma de testear el tipo de dato
    // expect(typeof letters).toBe('string')
    // expect(typeof numbers).toBe('number')

    // Segunda forma
    expect(letters).toEqual(expect.any(String)) // Que letters sea igual a cualquier tipo de string
    expect(numbers).toEqual(expect.any(Number))
  });
});
