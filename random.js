//generates random letters

function makeid(length) {
  var result = "";
  var characters = "abcdefghijklmnopqrstuvwxyz";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

//makes it repeat itself
let interval;

function random(x) {
  let rl1 = "";
  let rl2 = "";
  let text = "";
  let element = x;

  text = element.innerHTML.slice(0, -2);
  element.innerHTML = text + "xd";

  interval = setInterval(() => {
    rl1 = makeid(1);
  }, 300);
  interval = setInterval(() => {
    rl2 = makeid(1);
  }, 100);
  interval = setInterval(() => {
    element.innerHTML = text + rl1 + rl2;
  }, 100);
}

function sRandom(first, value) {
  let firstx = first;
  firstx.innerHTML = String(value);
  clearInterval(interval);
}
