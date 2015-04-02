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

  // build a for loop that iterates over each colum

  // for each square in that first row --> kick off our decision tree
  // in the decision tree, recurse over each child

  var counter = 0;
  var solutions = [];
  var traverse = function(row, col){

    var prevPiece = board.get(row).indexOf(1);n
    if (prevPiece > -1) {
      board.togglePiece(row, prevPiece);
    }

    board.togglePiece(row, col);

    // if no conflict, traverse children, unless we're in last row
    if(!board.hasAnyRooksConflicts()){

      for(var i = 0; i < n; i++){

        // no conflict & no more children --> we have our solution
        if (row+1 === n){
          counter++;
          solutions.push(board.rows());
          board.togglePiece(row, col);
        } else {
          console.log('Table Size: ' + n + ' Lets traverse: ' + (row+1) + ', ' + i);
          traverse(row+1, i);
        }

        // no conflict & yes children --> traverse all children
      }
    }

  }

  traverse(0,0);

  console.log('Table Size: ' + n + ' Counter: ' + counter);
  // console.log(solutions);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solutions[0].rows();
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
