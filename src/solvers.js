/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {

  var board = new Board({n: n});

  var solutions = [];
  var occupied = [];
  for (var k = 0; k < n; k++) {
    occupied.push(0);
  }

  var traverse = function(row, col){

    board.togglePiece(row, col);
    occupied[col] = 1;

    if (row+1 === n){
      if (solutions.length === 0) {
        var newBoard = [];
        for (var i = 0; i < n; i++) {
          var newRow = [];
          for (var j = 0; j < n; j++) {
            newCell = board.get(i)[j];
            newRow.push(newCell);
          }
          newBoard.push(newRow);
        }
      solutions.push(newBoard);
      }
    } else {
      for(var column = 0; column < n; column++){
        if (occupied[column] === 0) {
          traverse(row+1, column);
        }
      }
    }

    board.togglePiece(row, col);
    occupied[col] = 0;
  }


  traverse(0,0);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solutions[0]));
  return solutions[0];
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  var solutionCount = 0;
  var occupied = [];
  for (var k = 0; k < n; k++) {
    occupied.push(0);
  }

  var traverse = function(row, col){

    board.togglePiece(row, col);
    occupied[col] = 1;

      if (row+1 === n){
        solutionCount++;
      } else {
        for(var column = 0; column < n; column++){
          if (occupied[column] === 0) {
            traverse(row+1, column);
          }
        }
      }
    board.togglePiece(row, col);
    occupied[col] = 0;
  }

  for (var j = 0; j < n; j++) {
    var board = new Board({n: n});
    traverse(0,j);
  }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  if (n === 0) {
    return [];
  }

  var occupied = [];
  // var occupiedMajor = [];
  // var occupiedMinor = [];

  // for (var i = 0; i < n; i++) {
  //   occupiedCol.push(0);
  //   occupiedMajor.push(0);
  //   occupiedMinor.push(0);
  // }
  var occupied = [];
  for (var k = 0; k < n; k++) {
    occupied.push(0);
  }
  //board.togglePiece(0,0);

  var solutions = [];

  var traverse = function(row, col) {

    board.togglePiece(row, col);
    occupied[col] = 1;

    if (row+1 === n) {
      if (solutions.length === 0) {
        var newBoard = [];
        for (var i = 0; i < n; i++) {
          var newRow = [];
          for (var j = 0; j < n; j++) {
            newCell = board.get(i)[j];
            newRow.push(newCell);
          }
          newBoard.push(newRow);
        }
      solutions.push(newBoard);
      }
    } else {
      for (var column = 0; column < n; column++) {
        board.togglePiece(row+1, column);
        if (!board.hasAnyQueenConflictsOn(row+1, column)) {
          board.togglePiece(row+1, column);
          traverse(row+1, column);
        } else {
          board.togglePiece(row+1, column);
        }
      }
    }

    board.togglePiece(row, col);
    occupied[col] = 0;
  };

  for (var j = 0; j < n; j++) {
    var board = new Board({n: n});
    traverse(0,j);
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solutions[0]));

  if(solutions.length > 0){
   return solutions[0];
  }
  else {
    return board.rows();
  }

};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if (n === 0) {
    return 1;
  }

  var solutionsCount = 0;
  var occupied = [];
  var occupiedMajor = [];
  var occupiedMinor = [];

  // for (var i = 0; i < n; i++) {
  //   occupiedCol.push(0);
  //   occupiedMajor.push(0);
  //   occupiedMinor.push(0);
  // }
  var occupied = [];
  for (var k = 0; k < n; k++) {
    occupied.push(0);
  }
  //board.togglePiece(0,0);

  var solutions = [];

  var traverse = function(row, col) {

    board.togglePiece(row, col);
    occupied[col] = 1;

    if (row+1 === n) {
      solutionsCount++;
    } else {
      for (var column = 0; column < n; column++) {
        board.togglePiece(row+1, column);
        if (!board.hasAnyQueenConflictsOn(row+1, column)) {
          board.togglePiece(row+1, column);
          traverse(row+1, column);
        } else {
          board.togglePiece(row+1, column);
        }
      }
    }

    board.togglePiece(row, col);
    occupied[col] = 0;
  };

  for (var j = 0; j < n; j++) {
    var board = new Board({n: n});
    traverse(0,j);
  }

  console.log('Number of solutions for ' + n + ' queens:', solutionsCount);
  return solutionsCount;
};
