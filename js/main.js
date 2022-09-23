const colorList = [
  'violet',
  'greenyellow',
  'gray',
  'blue',
  'orange',
  'purple',
  'green',
  'yellow',
  'pink',
  'red'
]

const btnList = () => {
  let content = ''
  colorList.map((color) => {
    content += `
      <button onclick="changeColor('${color}')" type="button" class='btn btn-change ${color}'></button>
    `
    document.querySelector('#color-list').innerHTML = content
  })
}
btnList()

const changeColor = (color) => {
    console.log(color);

      document.querySelector('#house').className = `house ${color}`
}
