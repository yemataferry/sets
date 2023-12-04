function changeColor() {
  const randomColor = getColor();
  document.body.style.backgroundColor = randomColor;
}

function getColor() {
  const change = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += change[Math.floor(Math.random() * 16)];
  }
  return color;
}
setInterval(changeColor, 3000);
