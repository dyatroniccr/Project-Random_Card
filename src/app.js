/* eslint-disable */
import "bootstrap";
import "./style.css";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function randomNum(arrSelect) {
  let number = Math.floor(Math.random() * arrSelect.length);
  return arrSelect[number];
}

let excuseView = () => {
  return (
    "<h4 >" +
    randomNum(who) +
    " " +
    randomNum(action) +
    " " +
    randomNum(what) +
    " " +
    randomNum(when) +
    "</h4>"
  );
};

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuseView();
  });
};
