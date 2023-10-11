// board representation that knows every rule of chess
// followed by 'search' and 'evaluation'

const square = d => {
  const row = d.row
  const col = d.col
  const squareColor = ((((row%2==0)?1:0)+col)%2==0)?1:0
  let piece
  let pieceColor
  if (row == 0 || row == 7) {
    piece = ['rook','knight','bishop','queen','king','bishop','knight','rook'][col]
    pieceColor = (row%2==0) ? 1 : 0
  } else if (row == 1 || row == 6) {
    piece = 'pawn'
    pieceColor = ((row-1)%2==0) ? 1 : 0
  }
  return { row, col, color, piece, pieceColor }
}

const board = Array.from(Array(8)).map((d,i) =>
  Array.from(Array(8)).map((dd,ii) =>
    square({row:i,col:ii})))

const moves = {
  pawn: '1u',
  rook: '*u,*d,*l,*r',
  bishop: '*s',
  knight: '1udlr-2udlr,2udlr-1udlr',
  queen: '**',
  king: '1*'
}
const move = ( => {
  if (d.row == 0)  
}

