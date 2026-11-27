import { COLORS } from '../helpers/colors.ts';

interface Hamburger {
  prepare(): void;
}

interface Drink {
  pour(): void;
}

class ChickenHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparando hamburguesa de %cpollo', COLORS.yellow);
  }
}

class BeefHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparando hamburguesa de %cres', COLORS.red);
  }
}

class Water implements Drink {
  pour(): void {
    console.log('Sirviendo un vaso de %cAgua', COLORS.blue);
  }
}

class Soda implements Drink {
  pour(): void {
    console.log('Sirviendo un vaso de %cGaseosa', COLORS.pink);
  }
}

interface RestaurantFactory {
  createHamburger(): Hamburger;
  createDrink(): Drink;
}

class FastFoodRestaurantFactory implements RestaurantFactory {
  createHamburger(): Hamburger {
    return new BeefHamburger();
  }

  createDrink(): Drink {
    return new Soda();
  }
}

class HealthyRestaurantFactory implements RestaurantFactory {
  createHamburger(): Hamburger {
    return new ChickenHamburger();
  }

  createDrink(): Drink {
    return new Water();
  }
}

function main(factory: RestaurantFactory) {
  const hamburger = factory.createHamburger();
  const drink = factory.createDrink();

  hamburger.prepare();
  drink.pour();
}

console.log('\n%cPedido del menú regular:', COLORS.green);
main(new FastFoodRestaurantFactory());

console.log('\n%cPedido del menú saludable:', COLORS.green);
main(new HealthyRestaurantFactory());