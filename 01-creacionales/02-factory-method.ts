import { COLORS } from '../helpers/colors.ts';

interface Hamburger {
  prepare(): void;
}

class ChickenHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparando una hamburguesa de %cpollo', COLORS.yellow);
  }
}

class BeefHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparando una hamburguesa de %cres', COLORS.brown);
  }
}

class BeanHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparando una hamburguesa de %cfrijol', COLORS.orange);
  }
}

abstract class Restaurant {
  abstract createHamburger(): Hamburger;

  orderHamburger(): void {
    const hamburger = this.createHamburger();
    hamburger.prepare();
  }
}

class ChickenRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new ChickenHamburger();
  }
}

class BeefRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new BeefHamburger();
  }
}

class BeanRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new BeanHamburger();
  }
}

function main() {
  let restaurant: Restaurant;
  const burgerType = prompt(
    '¿Qué tipo de hamburguesa quieres? (chicken/beef/bean)'
  );

  switch (burgerType) {
    case 'chicken':
      restaurant = new ChickenRestaurant();
      break;
    case 'beef':
      restaurant = new BeefRestaurant();
      break;
    case 'bean':
      restaurant = new BeanRestaurant();
      break;
    default:
      throw new Error('Opción no válida');
  }

  restaurant.orderHamburger();
}

main();