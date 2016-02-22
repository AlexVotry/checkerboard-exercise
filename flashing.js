

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
  squares.className = "rand";
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
  return newSquares;
}

 addSquare();

 console.log(createDiv().style.backgroundColor);

 function flashSquare() {
   var body = document.getElementsByTagName('body')[0];
   var newSquares = document.getElementsByClassName('rand');
   console.log(newSquares[2]);
   for (var i = 0; i < 63; i++) {
   newSquares[i].style.backgroundColor = randomColors();
   }
   return newSquares;
 }



 setInterval(function() {
     flashSquare();
 }, 2000 ); //set an interval timer up to repeat the function

var lastDiv = document.getElementsByClassName('div')[62];
var music = document.createElement('audio');
music.src = 'thiftshop.mp3';
lastDiv.appendChild(music);
music.play();

}());
