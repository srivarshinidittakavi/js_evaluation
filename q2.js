function createRateLimiter(limit, interval) {
  let count = 0
  let lastReset = Date.now()

  return function () {
    const now = Date.now()
    if (now - lastReset >= interval) {
      count = 0
      lastReset = now
    }
    if (count >= limit) return 'Rate limit exceeded'
    count++
    return 'Allowed'
  }
}
