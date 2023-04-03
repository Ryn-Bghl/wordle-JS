// only use in https://wordlegame.org/

// all the letter and their coordinates
var dictionary = {
  q: [1, 1],
  w: [1, 2],
  e: [1, 3],
  r: [1, 4],
  t: [1, 5],
  y: [1, 6],
  u: [1, 7],
  i: [1, 8],
  o: [1, 9],
  p: [1, 10],
  a: [2, 1],
  s: [2, 2],
  d: [2, 3],
  f: [2, 4],
  g: [2, 5],
  h: [2, 6],
  j: [2, 7],
  k: [2, 8],
  l: [2, 9],
  enter: [3, 1],
  z: [3, 2],
  x: [3, 3],
  c: [3, 4],
  v: [3, 5],
  b: [3, 6],
  n: [3, 7],
  m: [3, 8],
  delete: [3, 9],
};

//-------------------------------------------------------

// the starting words
var words = ["glent", "brick", "jumpy", "vozhd", "waqfs"];

//-------------------------------------------------------

//the function that write the letter (and click on enter or delete)
function write(char) {
  document
    .querySelector(
      `div.Game-keyboard-row:nth-child(${dictionary[char][0]}) > div:nth-child(${dictionary[char][1]})`
    )
    .click();
}

//-------------------------------------------------------

// enter the three words
function start() {
  words.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      write(`${word[i]}`);
    }
    write("enter");
  });
}

//-------------------------------------------------------

function getKeyByValue(obj, value) {
  return Object.keys(obj).find((key) => obj[key] === value);
}

//-------------------------------------------------------

function Bltr(str) {
  ltr_lst = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
    10: "k",
    11: "l",
    12: "m",
    13: "n",
    14: "o",
    15: "p",
    16: "q",
    17: "r",
    18: "s",
    19: "t",
    20: "u",
    21: "v",
    22: "w",
    23: "y",
    24: "z",
  };
  str.split("").forEach((ltr) => {
    delete ltr_lst[getKeyByValue(ltr_lst, ltr)];
    console.log(ltr_lst);
  });
  console.log(Object.values(ltr_lst).join(""));
}

//-------------------------------------------------------

var btnDiv = document.querySelector(".buttons");

// Create a new <button> element
var btn = document.createElement("button");

// set the needed atributes
btn.setAttribute("class", "button mini_modal_link");
btn.setAttribute("type", "button");
btn.setAttribute("onclick", "start()");

// Set the content of the <button> element
var content = document.createTextNode("🐱‍💻");
btn.appendChild(content);

// Add the <button> element to the document
btnDiv.appendChild(btn);

//-------------------------------------------------------

// Create a new <input> element
var inpt = document.createElement("input");

// set the needed atributes

// Set the content of the <input> element

// Add the <input> element to the document

//-------------------------------------------------------
