const btn=document.querySelector("button");
const body=document.body;
const currentitem = document.querySelector(".current-class");

function randomColorGenerator(){
  const red=Math.floor(Math.random() *256);
  const green=Math.floor(Math.random() *256);
  const blue=Math.floor(Math.random() *256);
  const randomColor = `rgb(${red},${green},${blue})`
  return randomColor;
}

btn.addEventListener("click",function(){
  const randomNumber = randomColorGenerator();
  body.style.backgroundColor=randomNumber;
  currentitem.textContent=randomNumber;
});