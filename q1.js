
function createBankAccount() {
  let balance = 0
  const transactions = []
  return {
    deposit(amount) {
      if (typeof amount !== 'number' || amount <= 0) return 'Invalid deposit amount'
      balance += amount
      transactions.push({ type: 'deposit', amount, balance })
      return balance
    },
    withdraw(amount) {
      if (typeof amount !== 'number' || amount <= 0) return 'Invalid withdraw amount'
      if (amount > balance) return 'Insufficient funds'
      balance -= amount
      transactions.push({ type: 'withdraw', amount, balance })
      return balance
    },
    getBalance() {
      return balance
    },
    getTransactionHistory() {
      return transactions.slice()
    }
  }
}
