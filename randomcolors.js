
(function () {
function randomColors() {
  var hex = '123456789ABCDEF';
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 15)];
  }
  return color;
}
var createDiv = function() {
  var squares = document.createElement('div');
  squares.className = "red";
  squares.style.backgroundColor = randomColors();
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

}());
