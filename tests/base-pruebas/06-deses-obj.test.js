import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Prueba en 06-deses-obj", () => {
  test("usContext debe retornar un objeto", () => {
    const datos = {
      clave: 'Rami',
      nombre: 'Ramiro',
      rango: 'Primer capitán',
      edad: 27
    }
    const capitan = usContext(datos)
    
    expect(capitan).toEqual({
      nombreClave: datos.clave,
      nombre: datos.nombre,
      anios: datos.edad,
      rango: datos.rango,
      latlng: {
          lat: 14.1232,
          lng: -12.3232
      }
    })
  });
});
