import { COLORS } from '../helpers/colors.ts';

interface CodeEditorStateProps {
  content: string;
  cursorPosition: number;
  unsavedChanges: boolean;
}

class CodeEditorState {
  readonly content: string;
  readonly cursorPosition: number;
  readonly unsavedChanges: boolean;

  constructor(
    content: string,
    cursorPosition: number,
    unsavedChanges: boolean
  ) {
    this.content = content;
    this.cursorPosition = cursorPosition;
    this.unsavedChanges = unsavedChanges;
  }

  copyWith({
    content,
    cursorPosition,
    unsavedChanges,
  }: Partial<CodeEditorStateProps>): CodeEditorState {
    return new CodeEditorState(
      content ?? this.content,
      cursorPosition ?? this.cursorPosition,
      unsavedChanges ?? this.unsavedChanges
    );
  }

  displayState() {
    console.log('\n%cEstado del Editor:', COLORS.green);
    console.log(`
    Contenido: ${this.content}
    Cursor Pos: ${this.cursorPosition}
    Unsaved Changes: ${this.unsavedChanges}
    `);
  }
}

class CodeEditorHistory {
  private history: CodeEditorState[] = [];
  private currentIndex: number = -1;

  save(state: CodeEditorState): void {
    if (this.currentIndex < this.history.length - 1) {
      this.history = this.history.slice(0, this.currentIndex + 1);
    }

    this.history.push(state);
    this.currentIndex++;
  }

  undo(): CodeEditorState | null {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      return this.history[this.currentIndex];
    }

    return null;
  }

  redo(): CodeEditorState | null {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
      return this.history[this.currentIndex];
    }

    return null;
  }
}

function main() {
  const history = new CodeEditorHistory();
  let editorState = new CodeEditorState("console.log('Hola Mundo');", 2, false);

  history.save(editorState);
  console.log('%cEstado inicial:', COLORS.blue);
  editorState.displayState();

  editorState = editorState.copyWith({
    content: "console.log('Hola Mundo'); \nconsole.log('Nueva línea');",
    cursorPosition: 3,
    unsavedChanges: true,
  });
  history.save(editorState);
  console.log('%cDespués del primer cambio:', COLORS.blue);
  editorState.displayState();

  editorState = editorState.copyWith({ cursorPosition: 5 });
  history.save(editorState);
  console.log('%cDespués de mover el cursor:', COLORS.blue);
  editorState.displayState();

  console.log('%cDespués del Undo:', COLORS.cyan);
  editorState = history.undo()!;
  editorState.displayState();

  console.log('%cDespués del Redo:', COLORS.cyan);
  editorState = history.redo()!;
  editorState.displayState();
}

main();