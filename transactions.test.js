const BankAccount = require('./bankAccount.js')
const Transaction = require('./transaction.js')
const { advanceBy, advanceTo, clear } = require('jest-date-mock');

describe('Transaction', () => {
    it('it return empty with no transactions have happened', () => {
        const transactions = new Transaction;
        expect(transactions).toEqual({});
    })
    it('it returns keys with no transactions or values', () => {
        const transactions = new Transaction;
        expect(transactions).toEqual({"amount": undefined, "balance": undefined, "date": undefined, "type": undefined});
    })
})

describe('Transaction integration with BankAccount', () => {

    beforeEach(() => {
        advanceTo(new Date(2023, 1, 20, 10, 0, 0)); // set the current date to 2023-02-20 10:00:00
      });
    
      afterEach(() => {
        jest.clearAllMocks(); // clear all mocks after each test
      });

    it('it returns keys with no transactions or values', () => {
        const transactions = new Transaction;
        expect(transactions).toEqual({"amount": undefined, "balance": undefined, "date": undefined, "type": undefined});
    })
    it('it return transaction that have happened, credit 20', () => {
        const bankAccount = new BankAccount;
        bankAccount.credit(20)
        expect(bankAccount.balance).toEqual(20);
        expect(bankAccount.transactions[0]).toEqual({ "date": new Date(2023, 1, 20, 10, 0, 0), "amount": 20, "type": 'credit', "balance": 20});
    })
    it('it return transaction that have happened, credit 20 twice', () => {
        const bankAccount = new BankAccount;
        bankAccount.credit(20)
        bankAccount.credit(20)
        expect(bankAccount.balance).toEqual(40);
        expect(bankAccount.transactions[0]).toEqual({"amount": 20, "balance": 20, "date": new Date(2023, 1, 20, 10, 0, 0), "type": "credit"});
        expect(bankAccount.transactions[1]).toEqual({"amount": 20, "balance": 40, "date": new Date(2023, 1, 20, 10, 0, 0), "type": "credit"});
    })
    it('it return transaction that have happened, credit 20 and debit 20', () => {
        const bankAccount = new BankAccount;
        bankAccount.credit(20)
        bankAccount.debit(20)
        expect(bankAccount.balance).toEqual(0);
        expect(bankAccount.transactions).toEqual([
            {
                "date": new Date(2023, 1, 20, 10, 0, 0),
                "type": "credit",
                "amount": 20,
                "balance": 20
              },
              {
                "date": new Date(2023, 1, 20, 10, 0, 0),
                "type": "debit",
                "amount": 20,
                "balance": 0
              }
        ]);
    })

})