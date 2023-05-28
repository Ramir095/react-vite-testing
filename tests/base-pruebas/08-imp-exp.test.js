import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroById debe de retornar un héroe por ID", () => {
    const id = 1;
    const heroFound = getHeroeById(id);
    expect(heroFound).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });
  test("getHeroesById debe de retornar undefined", () => {
    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy();
  });

  test("getHeroesByOwner debe de retornar un arreglo con los héroes de DC", () => {
    const owner = "DC";
    const herosFound = getHeroesByOwner(owner);

    expect(herosFound.length).toBe(3);
    expect(herosFound).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);

    // Forma más indicada y recomendada
    expect(herosFound).toEqual(heroes.filter((heroe) => heroe.owner === owner))
  });

  test("getHeroesByOwner debe de retornar un arreglo con los héroes de Marvel", () => {
    const owner = 'Marvel';
    const herosFound = getHeroesByOwner(owner);

    expect(herosFound.length).toBe(2);
    expect(herosFound).toEqual(heroes.filter((heroe) => heroe.owner === owner))
  });
});
