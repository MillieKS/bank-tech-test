// bankAccount.js
const Transaction = require('./transaction');

class BankAccount {
    constructor() {
        this.balance = 0;
        this.transactions = [];
        // this.transaction = new Transactions()

    }

    credit(credit) {
        const date = new Date();
        this.balance += credit;
        
        let transactionCredit = new Transaction(date, credit, 'credit', this.balance);
        this.transactions.push(transactionCredit)
    }

    debit(debit) {
        if (debit > this.balance) {
            const err = "Insufficient funds";
            throw err;
        } else {
            const date = new Date();
            this.balance -= debit;
            let transactionDebit = new Transaction(date, debit, 'debit', this.balance);
            this.transactions.push(transactionDebit)
        }
    }

    getTransactions() {
        return this.transactions
    }
}




module.exports = BankAccount;
