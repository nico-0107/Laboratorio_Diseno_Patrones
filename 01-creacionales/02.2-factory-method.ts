import { COLORS } from '../helpers/colors.ts';

interface Report {
  generate(): void;
}

class SalesReport implements Report {
  generate(): void {
    console.log('Generando el reporte de %cVentas', COLORS.yellow);
  }
}

class InventoryReport implements Report {
  generate(): void {
    console.log('Generando el reporte de %cInventarios', COLORS.green);
  }
}

abstract class ReportFactory {
  protected abstract createReport(): Report;

  generateReport(): void {
    const report = this.createReport();
    report.generate();
  }
}

class SalesReportFactory extends ReportFactory {
  override createReport(): Report {
    return new SalesReport();
  }
}

class InventoryReportFactory extends ReportFactory {
  override createReport(): Report {
    return new InventoryReport();
  }
}

function main() {
  let reportFactory: ReportFactory;
  const reportType = prompt('¿Qué tipo de reporte deseas? (sales/inventory)');

  if (reportType === 'sales') {
    reportFactory = new SalesReportFactory();
  } else {
    reportFactory = new InventoryReportFactory();
  }

  reportFactory.generateReport();
}

main();