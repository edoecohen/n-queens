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
  var solution;
  var traverse = function(row, col){

    board.togglePiece(row, col);

    // if no conflict, traverse children, unless we're in last row
    if(!board.hasAnyRooksConflicts()){
      for(var i = 0; i < n; i++){

        // no conflict & no more children --> we have our solution
        if (row+1 === n){
          solution = board;
        }

        // no conflict & yes children --> traverse all children
        else {
          traverse(row+1, i)
        }
      }
    }

    // else, there is a conflict --> toggle back & skip that path
    else {
      board.togglePiece(row, col);
    }

  }

  traverse(0,0);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

console.log(findNRooksSolution(12));

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
