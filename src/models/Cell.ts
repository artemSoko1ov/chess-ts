import type {Colors} from "./Colors.ts";
import type {Figure} from "./figures/Figure.ts";
import type {Board} from "./Board.ts";

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  figure: Figure | null;
  board: Board
  avaible: boolean;
  id: number | string;

  constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
    this.x = x
    this.y = y
    this.color = color
    this.figure = figure
    this.board = board
    this.avaible = false
    this.id = crypto.randomUUID() ?? Math.random
  }
}