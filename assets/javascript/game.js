// you will be given a random number at the start of the game.
// there are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score
// you win the game by matching your total acore to random number, you lose the game if your total score goes above the ramdom number
// The value of each crystal is hidden from you until you click on it.
// Each time when the game starts, the game will change the values of each crystal


//Random Number Target
var wins = 0;
var losses = 0;

var target = getRandomInt();

function getRandomInt() {
    return Math.floor(Math.random() * 1001 + 1);
}
document.getElementById("target").innerText = target;
console.log(Math.random)


$(document).ready(function () {



    $("#Cry1").click(function () {
        score = score + Cry1;
        $('#score').text(target)
        if (target == Random) {
            wins();
        }
        else if (target > Random) {
            losses();
        }

    });

    $("#Cry2").click(function () {
        score = score + Cry2;
        $('#score').text(target)
        if (target == Random) {
            wins();
        }
        else if (target > Random) {
            losses();
        }
    });

    $("#Cry3").click(function () {
        score = score + Cry3;
        $('#score').text(target)
        if (target == Random) {
            wins();
        }
        else if (target > Random) {
            losses();
        }
    });

    $("#Cry4").click(function () {
        score = score + Cry4;
        $('#score').text(target)
        if (target == Random) {
            wins();
        }
        else if (target > Random) {
            losses();
        }
    });

});

