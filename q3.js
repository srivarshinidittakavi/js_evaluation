function mySetInterval(callback, delay) {
  let timerId = {}
  let active = true

  function tick() {
    if (!active) return
    callback()
    timerId.id = setTimeout(tick, delay)
  }

  timerId.id = setTimeout(tick, delay)
  timerId.stop = () => {
    active = false
    clearTimeout(timerId.id)
  }

  return timerId
}

function myClearInterval(id) {
  if (id && typeof id.stop === 'function') id.stop()
}
