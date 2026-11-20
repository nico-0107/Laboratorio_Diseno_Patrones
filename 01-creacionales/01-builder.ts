import { COLORS } from '../helpers/colors.ts';

class Computer {
  public cpu: string = 'cpu - not define';
  public ram: string = 'ram - not define';
  public storage: string = 'storage - not define';
  public gpu?: string;

  displayConfiguration() {
    console.log(`Configuracion de la computadora
    CPU: ${this.cpu}
    RAM: ${this.ram}
    Almacenamiento: ${this.storage}
    GPU: ${this.gpu}
    `);
  }
}

class ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setCPU(cpu: string): ComputerBuilder {
    this.computer.cpu = cpu;
    return this;
  }

  setRAM(ram: string): ComputerBuilder {
    this.computer.ram = ram;
    return this;
  }

  setSTORAGE(storage: string): ComputerBuilder {
    this.computer.storage = storage;
    return this;
  }

  setGPU(gpu: string): ComputerBuilder {
    this.computer.gpu = gpu;
    return this;
  }

  build() {
    return this.computer;
  }
}

function main() {
  const basicComputer = new ComputerBuilder()
    .setCPU('Intel Core 2 Duo')
    .setRAM('4GB')
    .setSTORAGE('256GB')
    .build();

  console.log('%cComputadora basica:', COLORS.blue);
  basicComputer.displayConfiguration();

  const gamingComputer = new ComputerBuilder()
    .setCPU('Intel i9')
    .setRAM('16GB')
    .setSTORAGE('1TB SSD')
    .setGPU('Nvidia RTX 4070')
    .build();

  console.log('%cComputadora gamer:', COLORS.cyan);
  gamingComputer.displayConfiguration();
}

main();