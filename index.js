let buttons = document.getElementsByClassName('operator')
let acButton = document.getElementById("reset")
let output = document.getElementById('output')
let calculateButton = document.getElementById('calculate')

let cq = ''

;[...buttons].forEach(button => {
  button.onclick = (e) => {
    cq += e.target.value
    output.value = cq
  }
})

acButton.onclick = (e) => {
  cq = ''
  output.value = ''
}

calculateButton.onclick = (e) => {
  if (eval(cq)) {
    output.value = eval(cq)
    cq = `${eval(cq)}`
  }
}
