/* eslint-disable */
import "bootstrap";
import "./style.css";

const getSuitCard = () => {
  //let suitsCard = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  let suitsCard = ["spade", "club", "heart", "diamond"];
  let randomSuit = suitsCard[Math.floor(Math.random() * 3)];
  return randomSuit;
};

const getNumberCard = () => {
  let numbersCard = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "J",
    "Q",
    "K"
  ];
  let randomCard = numbersCard[Math.floor(Math.random() * 12)];
  return randomCard;
};
function getSuit() {
  document.querySelector(".card").classList.add(getSuitCard());
  document.querySelector(".card").classList.remove(getSuitCard());
}

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    let numberCardJS = document.querySelector(".number");

    console.log(getSuitCard());
    numberCardJS.innerHTML = getNumberCard();
    getSuit();
  });
};
