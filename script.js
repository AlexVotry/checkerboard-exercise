// Each tile should be a `div`
// * Each tile's width is `11.1%`
// * Set each tile's `float` property to `left`
// * Each tile's paddingBottom is `11.1%`



(function () {
  // var body = document.getElementsByTagName('body')[0];
  // for (var i = 0; i < 9; i++) {
  //   var checkerBoard = [];
  //   var rows = document.createElement('div');
  //   rows.className = "rows";
  //   checkerBoard.push(rows[i]);
  // }
var createDiv = function() {
  var squares = document.createElement('div');
  squares.className = "red";
  squares.style.backgroundColor = "red";
  squares.style.boxSizing = 'border-box';
  squares.style.paddingBottom = '11.1%';
  squares.style.width = '11.1%';
  squares.style.float = 'left';
  return squares;
}
// var blackSq() {
//   var squares = createDiv(
//
// }

function addSquare() {
  var body = document.getElementsByTagName('body')[0];
  var newSquares = [];
  for (var i = 0; i < 63; i++) {
    newSquares.push(createDiv());
    body.appendChild(newSquares[i]);
  }
}

 addSquare();
function makeBlack() {
  var squares = document.getElementsByTagName('div');
  for (var i = 0; i < squares.length; i++) {
    squares[i*2].className = "black";
    squares[i*2].style.backgroundColor = "black";
  }
  return squares;
}
makeBlack();

}());

console.log(checkerBoard);
