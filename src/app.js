/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

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

who.length;
window.onload = function() {
  //write your code here

  const quest1 = document.querySelector("#quest1");
  quest1.innerHTML = "<h5 >" + randomNum(who) + "</h5>";
  const quest2 = document.querySelector("#quest2");
  quest2.innerHTML = "<h5>" + randomNum(action) + "</h5>";
  const quest3 = document.querySelector("#quest3");
  quest3.innerHTML = "<h5>" + randomNum(what) + "</h5>";
  const quest4 = document.querySelector("#quest4");
  quest4.innerHTML = "<h5>" + randomNum(when) + "</h5>";

  /*when.map((item, index) => {
    quest4.innerHTML = `<div class="col border" key="${index}"> ${item} </div>`;
  });*/
};

function randomNum(arrSelect) {
  let number = Math.floor(Math.random() * arrSelect.length);
  return arrSelect[number];
}
