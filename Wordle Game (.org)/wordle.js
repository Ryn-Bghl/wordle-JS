// only use in https://wordlegame.org/

// all the letter and their coordinates of the keyboard
var keyboard = {
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
      `div.Game-keyboard-row:nth-child(${keyboard[char][0]}) > div:nth-child(${keyboard[char][1]})`
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


function toggle(){
  if(btn2.textContent == "❌"){
    btn2.textContent = "✔"
  }else if(btn2.textContent == "✔"){
    btn2.textContent = "❌"
  }else{
    btn2.textContent = "❓❓❓"
  }
};

// Create a new <button> element
var btn2 = document.createElement("button");

// set the needed atributes
btn2.setAttribute("class", "button mini_modal_link");
btn2.setAttribute("type", "button");
btn2.setAttribute("onclick", "toggle()");

// Set the content of the <button> element
var content = document.createTextNode("❌");
btn2.appendChild(content);

// Add the <button> element to the document
btnDiv.appendChild(btn2);

//-------------------------------------------------------

// get the state of the letter:-> document.querySelector("div.Row:nth-child(2) > div:nth-child(1)").attributes["class"].nodeValue.split(" ")[1]
/*

var x = [], y = [];

for (let i = 1; i <= 5; i++) {
  x.push(i.toString())
}
for (let i = 1; i <= 6; i++) {
  y.push(i.toString())
}

console.log(x, y)

function State() {
  
  console.log(document.querySelector(`div.Row:nth-child(coor) > div:nth-child(coor)`).attributes["class"].nodeValue.split(" ")[1])
}
*/