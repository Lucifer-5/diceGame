//For Dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //no. 1 to 6

var randomDiceImage1 =  "dice" + randomNumber1 +".png" ; //dice1 to dice6 .png
var imageSource1 = "diceimages/" + randomDiceImage1 ; //add diceimages folder
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imageSource1);

// For Dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //no. 1 to 6

var randomDiceImage2 =  "dice" + randomNumber2 +".png" ; //dice1 to dice6 .png
var imageSource2 = "diceimages/" + randomDiceImage2 ; //add diceimages folder
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imageSource2);

//For Winning Players

if(randomNumber1 > randomNumber2){
  document.querySelector(".heading").innerHTML = "🚩 Player 1 Wins";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector(".heading").innerHTML = "Player 2 wins 🚩";
}
else {
  document.querySelector(".heading").innerHTML = "Draw!";
}
