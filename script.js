
(function () {
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
// debugging shows 'cannot set property 'className' of undefined.'
    squares[i*2].className = "black";
    squares[i*2].style.backgroundColor = "black";
  }
  return squares;
}
makeBlack();

}());
