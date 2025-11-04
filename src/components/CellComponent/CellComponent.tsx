import './CellComponent.scss'
import {Cell} from "../../models/Cell";
import {FC} from "react";
import classNames from "classnames";

interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void
}

const CellComponent: FC<CellProps> = ({cell, selected, click}) => {
  return (
    <div
      className={classNames("cell", cell.color, {"selected": selected,})}
      onClick={() => click(cell)}
      style={{background: cell.available && cell.figure ? 'green' : ''}}
    >
      {cell.available && !cell.figure && <div className={"available"} />}
      {cell.figure?.logo && <img
        src={cell.figure.logo}
        alt=""
      />}
    </div>
  )
}

export default CellComponent