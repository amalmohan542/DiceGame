var RandomNum1 =Math.floor(Math.random()*6)+1;
var RandomImgSource1="images/dice"+RandomNum1+".png";
document.querySelectorAll("img")[0].setAttribute("src",RandomImgSource1);

var RandomNum2= Math.floor(Math.random()*6)+1;
var RandomImgSource2="images/dice"+RandomNum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",RandomImgSource2);

if(RandomNum1>RandomNum2)
{
    document.querySelector("h3").innerHTML="🏆Player 1 Wins🏆";
}
else if (RandomNum1<RandomNum2) {
    document.querySelector("h3").innerHTML="🏆Player 2 Wins🏆";
    
} else {
    document.querySelector("h3").innerHTML="🎲Draw🎲"
    
}