import { COLORS } from '../helpers/colors.ts';

class Pokemon {
  name: string;
  type: string;
  level: number;
  attacks: string[];

  constructor(name: string, type: string, level: number, attacks: string[]) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.attacks = attacks;
  }

  clone(): Pokemon {
    return new Pokemon(
      this.name,
      this.type,
      this.level,
      [...this.attacks]
    );
  }

  displayInfo(): void {
    console.log(
      `Nombre: ${this.name}\nTipo: ${this.type}\nNivel: ${this.level}\nAtaques: ${this.attacks.join(', ')}\n`
    );
  }
}

function main() {
  const basePokemon = new Pokemon('Charmander', 'Fuego', 1, [
    'Llamarada',
    'Arañazo',
  ]);

  const clone1 = basePokemon.clone();
  clone1.name = 'Charmeleon';
  clone1.level = 16;
  clone1.attacks.push('Lanzallamas');

  console.log('%cCharmander', COLORS.red);
  basePokemon.displayInfo();

  console.log('%cCharmeleon', COLORS.pink);
  clone1.displayInfo();
}

main();