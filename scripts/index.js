//instructions:

// Write a script that , when you click on the button,
// adds a new fox RANDOM image to the container div.
// All foxes should be floated.  Make another button to remove all foxes.

// Stretch:   Make several buttons that change the way the foxes are
// added and displayed.  Example:  a new add button would change all
// to display: block in the existing dom and add a new random fox which is
// also display: block.  Hit the display float button and they all change
// back to float and it adds a new floated random fox.


var rotation = 0;
var amountOfFoxes = 0;

document.getElementById("trigger").addEventListener("click", addFox);

document.getElementById("small-trigger").addEventListener("click", addSmallFox);
document.getElementById("medium-trigger").addEventListener("click", addMediumFox);
document.getElementById("big-trigger").addEventListener("click", addBigFox);
document.getElementById("rotate-trigger").addEventListener("click", rotate);
document.getElementById("race-trigger").addEventListener("click", race);
document.getElementById("block-trigger").addEventListener("click", function () {
  changeDisplay("block");
});
document.getElementById("inline-trigger").addEventListener("click", function () {
  changeDisplay("inline");
});

function addFox() {

  var whichFox = Math.floor((Math.random() * 3));
  var whichSize = Math.floor((Math.random() * 3));
  var whichClass = "";

  switch (whichSize) {
    case 0:
      whichClass = "small"
      break;
    case 1:
      whichClass = "medium"
      break;
    case 2:
      whichClass = "big"
      break;
    default:

  }

  console.log(whichFox);

  document.getElementById("container").innerHTML += "<img class="+ whichClass + " id='any-fox' src='" + collection["images"][whichFox]["image_src"] + "'>";
  // <img src='" collection["images"][0]["image_src"] + "' alt='fox'>
}

function addSmallFox() {
  var whichFox = Math.floor((Math.random() * 3));
  document.getElementById("container").innerHTML += "<img id=small class='any-fox "+ "the-" + amountOfFoxes+"' src='" + collection["images"][whichFox]["image_src"] + "'>";
  amountOfFoxes++;
  console.log(amountOfFoxes);

}
function addMediumFox() {
  var whichFox = Math.floor((Math.random() * 3));
  document.getElementById("container").innerHTML += "<img id=medium class='any-fox "+ "the-" + amountOfFoxes+"' src='" + collection["images"][whichFox]["image_src"] + "'>";
  amountOfFoxes++;
  console.log(amountOfFoxes);

}
function addBigFox() {
  var whichFox = Math.floor((Math.random() * 3));
  document.getElementById("container").innerHTML += "<img id=big class='any-fox "+ "the-" + amountOfFoxes+"' src='" + collection["images"][whichFox]["image_src"] + "'>";
  amountOfFoxes++;
  console.log(amountOfFoxes);

}

function changeDisplay(toWhat) {
  if(toWhat === "block"){
    $(".any-fox").css("display", "block");
  }else{
    $(".any-fox").css("display", "inline");
  }
}

function rotate() {
  rotation += 45;
  $(".any-fox").css("transform", "rotate("+rotation+"deg)")
}

function race() {

  for(var i = 0; i <=  amountOfFoxes; i++){
      var raceTime = Math.floor(Math.random() * 10);
      $(".the-" + i).css("animation-name", "race");
      $(".the-" + i).css("animation-duration", raceTime + "s");
    }

  }
