function createCountdown(seconds, onTick, onComplete) {
  let remaining = seconds
  let active = true
  let expected = Date.now() + 1000
  let timer = null

  function step() {
    if (!active) return
    const drift = Date.now() - expected
    if (remaining > 0) {
      remaining--
      onTick(remaining)
      expected += 1000
      timer = setTimeout(step, Math.max(0, 1000 - drift))
    } else {
      active = false
      onComplete()
    }
  }

  timer = setTimeout(step, 1000)

  return {
    pause() {
      active = false
      clearTimeout(timer)
    },
    resume() {
      if (remaining <= 0 || active) return
      active = true
      expected = Date.now() + 1000
      timer = setTimeout(step, 1000)
    }
  }
}