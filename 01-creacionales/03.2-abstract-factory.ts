import { COLORS } from '../helpers/colors.ts';

interface Vehicle {
  assemble(): void;
}

interface Engine {
  start(): void;
}

class ElectricCar implements Vehicle {
  assemble(): void {
    console.log('Ensamblando un auto %celéctrico', COLORS.cyan);
  }
}

class GasCar implements Vehicle {
  assemble(): void {
    console.log('Ensamblando un auto de %ccombustión', COLORS.yellow);
  }
}

class ElectricEngine implements Engine {
  start(): void {
    console.log('Arrancando motor %celéctrico', COLORS.cyan);
  }
}

class GasEngine implements Engine {
  start(): void {
    console.log('Arrancando motor de %ccombustión', COLORS.yellow);
  }
}

interface VehicleFactory {
  createVehicle(): Vehicle;
  createEngine(): Engine;
}

class ElectricVehicleFactory implements VehicleFactory {
  createVehicle(): Vehicle {
    return new ElectricCar();
  }

  createEngine(): Engine {
    return new ElectricEngine();
  }
}

class GasVehicleFactory implements VehicleFactory {
  createVehicle(): Vehicle {
    return new GasCar();
  }

  createEngine(): Engine {
    return new GasEngine();
  }
}

function main(factory: VehicleFactory) {
  const vehicle = factory.createVehicle();
  const engine = factory.createEngine();

  vehicle.assemble();
  engine.start();
}

console.log('Creando vehículo eléctrico:');
main(new ElectricVehicleFactory());

console.log('\nCreando vehículo de combustión:');
main(new GasVehicleFactory());