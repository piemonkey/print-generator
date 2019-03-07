window.onload = () => {
  document.querySelectorAll('textarea').forEach(input => {
    input.oninput({ target: input })
  })
  document.querySelectorAll('input').forEach(input => {
    input.oninput({ target: input })
  })
}
function onTextInput(selector, event) {
  document.querySelector(selector).textContent = event.target.value
}

function onTextAreaInput(selector, event) {
  console.log({selector, event})
  document.querySelector(selector).textContent = event.target.value
}

function onDateInput(selector, event) {
  const date = event.target.value || new Date()
  document.querySelector(selector).textContent = date.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: '2-digit',
    month: 'short',
    hour: 'numeric',
    hour12: true,
  })
}

function printDoc() {
  console.log('print')
  window.print()
}
