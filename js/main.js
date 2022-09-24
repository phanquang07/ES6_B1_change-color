// Ex1: Change color house
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

// Ex2: Calc scores

// let scoreVan = document.querySelector('#inputVan').value
// let scoreSu = document.querySelector('#inputSu').value
// let scoreDia = document.querySelector('#inputDia').value

// let scoreList = [
//   scoreToan,
//   scoreLy,
//   scoreHoa,
//   scoreVan,
//   scoreSu,
//   scoreDia
// ]

let calcScore = (d1, d2, d3) => {
  let dtb = 0
  if (isNaN(d1) || isNaN(d2) || isNaN(d3)) {
    alert('Bạn phải nhập số')
    return dtb = ''
  }
  return dtb = ((d1 + d2 + d3) / 3).toFixed(2)
}

let calcScore1 = () => {
  let scoreToan = Number(document.querySelector('#inputToan').value)
  let scoreLy = Number(document.querySelector('#inputLy').value)
  let scoreHoa = Number(document.querySelector('#inputHoa').value)

  document.querySelector('#result-score-1').innerHTML = calcScore(scoreToan, scoreLy, scoreHoa)
}
document.querySelector('#calc-score1').onclick = calcScore1

let calcScore2 = () => {
  let scoreVan = Number(document.querySelector('#inputVan').value)
  let scoreSu = Number(document.querySelector('#inputSu').value)
  let scoreDia = Number(document.querySelector('#inputDia').value)

  document.querySelector('#result-score-2').innerHTML = calcScore(scoreVan, scoreSu, scoreDia)
}
document.querySelector('#calc-score2').onclick = calcScore2