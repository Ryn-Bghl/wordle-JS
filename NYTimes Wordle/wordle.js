// only use in https://www.nytimes.com/games/wordle/index.html

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
    a: [2, 2],
    s: [2, 3],
    d: [2, 4],
    f: [2, 5],
    g: [2, 6],
    h: [2, 7],
    j: [2, 8],
    k: [2, 9],
    l: [2, 10],
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
  
  // the starting words
  const words = ["ratio", "mends", "lucky"];
  
  //the function that write the letter (and click on enter or delete)
  function write(char) {
    document.querySelector(
        `div.Keyboard-module_row__ilOKU:nth-child(${dictionary[char][0]}) > button:nth-child(${dictionary[char][1]})`
    ).click();
  }
  
  // enter the three words
  words.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      write(`${word[i]}`);
    }
    write("enter");
  });
  
