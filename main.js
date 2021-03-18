// tady je místo pro náš program

let music = document.querySelector("#audio");

function tucne(udalost) {
  udalost.target.style.fontWeight = "bold";
}

function normal(udalost) {
  udalost.target.style.fontWeight = "normal";
}

function cerveny() {
  let par = document.querySelector(".paragraph");
  par.classList.toggle("red");
}

function vetsi() {
  let s = document.querySelector(".paragraph");
  let ted = parseFloat(s.style.fontSize);
  ted += 1;
  s.style.fontSize = ted + "px";
}

function prehraj() {
  let music = document.querySelector("#audio");
  music.play();

}


function znovu() {
  music.currentTime = 0;
}


function volume() {
  let ovladac = document.querySelector("#control");
  music.volume = (ovladac.value / 100);
}