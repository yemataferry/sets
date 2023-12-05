let box = document.getElementsByTagName('body')

const band = document.getElementById('heading')
heading.style.backgroundColor = 'gray'
heading.style.textAlignment = 'center'
heading.style.display = 'flex'
heading.style.flexDirection = 'column'

function changeColor() {
  const randomColor = getColor()
  document.body.style.backgroundColor = randomColor
}

function getColor() {
  const change = "0123456789ABCDEF"
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += change[Math.floor(Math.random() * 16)]
  }
  return color
}
setInterval(changeColor, 1000)
