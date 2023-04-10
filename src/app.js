/* eslint-disable */
import "bootstrap";
import "./style.css";

const getSuitCard = () => {
  let suitsCard = ["spade", "club", "heart", "diamond"];
  let randomSuit = suitsCard[Math.floor(Math.random() * 4)];
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

function getCard() {
  let suit = getSuitCard();
  let divCard = document.querySelector(".card");
  divCard.classList.toggle(suit);
  let numberCardJS = document.querySelector(".number");
  numberCardJS.innerHTML = getNumberCard();
  console.log(suit);
}

window.onload = function() {
  //write your code here
  getCard();
  document.querySelector("#btn").addEventListener("click", () => {
    getCard();
  });
};
