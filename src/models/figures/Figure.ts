import {Colors} from "../Colors";
import logo from '../../assets/black-bishop.png'
import {Cell} from "../Cell";

export enum FigureNames {
  FIGURE = "",
  KING = "Король",
  KNIGHT = "Конь",
  PAWN = "Пешка",
  QUEEN = "Ферзь",
  ROOK = "Ладья",
  BISHOP = "Слон",

}

export class Figure {
  color: Colors;
  logo: typeof logo | null
  cell: Cell
  name: FigureNames
  id: number | string


  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this
    this.name = FigureNames.FIGURE
    this.id = crypto.randomUUID() ?? Math.random()
  }

  canMove(target: Cell): boolean {
    return true
  }

  moveFigure(target: Cell) {

  }
}