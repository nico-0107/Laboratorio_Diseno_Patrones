class Document {
  public title: string;
  private content: string;
  public author: string;

  constructor(title: string, content: string, author: string) {
    this.title = title;
    this.content = content;
    this.author = author;
  }

  clone(): Document {
    return new Document(this.title, this.content, this.author);
  }

  displayInfo() {
    console.log(`
    Title: ${this.title}
    Content: ${this.content}
    Author: ${this.author}
    `);
  }
}

function main() {
  const document1 = new Document('Cotizacion', '500 dolares', 'David');
  console.log({ document1 });
  document1.displayInfo();

  const document2 = document1.clone();
  document2.title = 'Nueva cotizacion';

  console.log({ document2 });
  document2.displayInfo();
}

main();