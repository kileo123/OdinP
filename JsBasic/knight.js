const BOARDSIZE = 8;

export function knightMoves(initial, target) {
  if ( !checkCoordinate(initial) || !checkCoordinate(target) ){
    return "Invalid coordinates"
  } 

  const directions = [[-1, 2], [-1, -2], [1, 2], [1, -2], [-2, 1], [-2, -1], [2, 1], [2, -1]]
  const set = new Set()
  const queue = [{currLoc:initial, path:[]}]
  
  while(true) {
    const {currLoc, path} = queue.shift()
    for(const dir of directions) {
      const next = [currLoc[0] + dir[0], currLoc[1] + dir[1]];
      if (checkCoordinate(next) && !set.has(next)) {
        set.add(next)
        queue.push({currLoc:next, path:[...path, currLoc]})
      }
    }
    if (currLoc[0] === target[0] && currLoc[1] === target[1]) {
      path.push(currLoc)
      return path
    }
  }
}

function checkCoordinate(point){
  return (point[0]<BOARDSIZE && point[0]>=0 && point[1]<BOARDSIZE && point[1]>=0)
}