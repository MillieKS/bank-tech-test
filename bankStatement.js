const BankAccount = require('./bankAccount');

class BankStatement {
    constructor(account) {
        this.account = account
    }

    format() {
        let header =  "date || credit || debit || balance\n"
        
        const transactions = this.account.getTransactions();

        transactions.forEach((transaction) => {
            if (transaction.type === 'credit') {
                const date = transaction.date.toLocaleDateString()
                return header += `${date} || ${transaction.amount} || || ${transaction.balance}\n`
            } else if (transaction.type === 'debit') {
                const date = transaction.date.toLocaleDateString()
                return header += `${date} || || ${transaction.amount} || ${transaction.balance}\n`
            } else {
                return header += 'There are no transactions'
            }
           

        })

        return header.trim();


    }
}

module.exports = BankStatement;