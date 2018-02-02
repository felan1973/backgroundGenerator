const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const uiResponse = document.getElementById("response");
const uiGenerateBtn = document.getElementById("generate-btn");


uiResponse.addEventListener("DOMContentLoaded", setGradient());
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
uiGenerateBtn.addEventListener("click", randomGradient);

function setGradient() {
  body.style.background = `
 linear-gradient(to right, 
  ${color1.value} 
  ,  
  ${color2.value} 
  )`;

  uiResponse.textContent = body.style.background + ";";
}

function randomGradient() {
  color1.value = randomColor();
  color2.value = randomColor();
  setGradient();
}

function randomColor() {
  const randomNum = () => {
    const num = Math.floor((Math.random() * 255) + 1).toString(16);
    if(num.length < 2){
      return '0' + num;
    } 
    return num;
  };
  return `#${randomNum()}${randomNum()}${randomNum()}`;
}







