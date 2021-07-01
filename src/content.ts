console.log('content.js')

const formatter = new Intl.DateTimeFormat('en-US', {
  hour12: true,
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
})

const clock = document.createElement('div')
clock.classList.add('clockOnTop')
setInterval(updateClock, 1000)
updateClock()
document.body.append(clock)

function updateClock() {
  const time = formatter.format(new Date())
  // Don't want to update the DOM unless needed
  if (clock.innerText !== time) {
    clock.innerText = time
  }
}
