var f=Math.floor(Math.random()*6)+1;
var dicestring="dice"+f+".png";
var actualstring="images/"+dicestring;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",actualstring);
var f1=Math.floor(Math.random()*6)+1;
var dicestring1="dice"+f1+".png";
var actualstring1="images/"+dicestring1;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",actualstring1);

if(f>f1)
{
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(f<f1)
{
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else
{
    document.querySelector("h1").innerHTML="It's a Tie";
}