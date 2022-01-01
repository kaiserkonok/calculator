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
  try {
    if (eval(cq) !== undefined && cq !== '') {
      output.value = eval(cq)
      cq = `${eval(cq)}`
    } else {
    	output.value = "Syntax error!"
    }
  } catch (e) {
    output.value = "Syntax error!"
  }
}
