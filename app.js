const generateRandom = (min = 0, max = 3) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const generateColor = currentColor => {
  let newColor = colors[generateRandom()];
  if (currentColor) {
    while (newColor === currentColor) {
      console.log(`WTF ${newColor} matches ${currentColor}`);
      newColor = colors[generateRandom()];
    }
  }

  return newColor;
}

const generateAppendage = currentAppendage => {
  let appendage = appendages[generateRandom()];
  if (currentAppendage) {
    while (appendage === currentAppendage) {
      console.log(`WTF ${currentAppendage} matches ${appendage}`);
      appendage = appendages[generateRandom()];
    }
  }

  return appendage;
}

const updateColorAndAppendage = () => {
  let initialAppendage = appendages[generateRandom()];
  let appendage = generateAppendage(initialAppendage);

  let initialColor = colors[generateRandom()];
  let color = generateColor(initialColor);

  const colorElement = document.getElementById("color");
  colorElement.innerText = colorElement.style.color = color;

  document.getElementById("appendage").innerText = appendage;
}

colors = ["red", "yellow", "green", "blue"];
appendages = ["left foot", "left hand", "right foot", "right hand"];

window.onload = () => {
  updateColorAndAppendage();
  document.getElementById("get-new-color-and-appendage").addEventListener("click", (e) => {
    e.preventDefault();
    updateColorAndAppendage();
  });
}
