// Escrevendo classes de um jogo
class Hero {
  constructor(nameHero, ageHero, typeHero) {
    this.nameHero = nameHero;
    this.ageHero = ageHero;
    this.typeHero = typeHero;
  }

  attack() {
    let attackHero;

    if (this.typeHero === "Guerreiro") {
      attackHero = "Espada";
    } else if (this.typeHero === "Mago") {
      attackHero = "Magia";
    } else if (this.typeHero === "Monge") {
      attackHero = "Artes Marciais";
    } else {
      attackHero = "Shuriken";
    }

    return `${this.typeHero} está atacando com ${attackHero}`;
  }
}

let theHero = new Hero("Davi", 18, "Guerreiro");

console.log(theHero.attack());
// Output: "Guerreiro está atacando com Espada"