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
  let spot = "";
  let spot2 = "";
  let text = "";
  let element = x;
  let random = Math.floor(Math.random() * 3);
  let random2 = Math.floor(Math.random() * 500) + 100;

  text = element.innerHTML.slice(0, -2);
  element.innerHTML = text + "xd";

  if (random != 1) {
    interval = setInterval(() => {
      spot = makeid(1);
    }, random2);
    interval = setInterval(() => {
      spot2 = makeid(1);
    }, random2);
  }

  interval = setInterval(() => {
    element.innerHTML = text + spot1 + spot2;
  }, 100);
}

function sRandom(first, value) {
  let firstx = first;
  firstx.innerHTML = String(value);
  clearInterval(interval);
}

function rnumber() {
  console.log(Math.floor(Math.random() * 2));
}
