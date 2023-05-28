import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Prueba en 09-promesas", () => {
  test("getHeroeByIdAsync debe de retornar un héroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done(); // Argumento que indica a Jest que espere a que el codigo termine
    });
  });

  test("getHeroeByIdAsync debe obtener un error si heroe no o existe", (done) => {
    const id = 100;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toBeFalsy();
      done();
    })
    .catch(error => {
      expect(error).toBe(`No se pudo encontrar el héroe ${id}`)
      done();
    })
  });
});
