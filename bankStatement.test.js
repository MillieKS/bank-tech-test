const BankAccount = require('./bankAccount.js')
const Transaction = require('./transaction.js')
const BankStatement = require('./bankStatement.js');
const { advanceBy, advanceTo, clear } = require('jest-date-mock');


describe('BankStatement', () => {
    it('returns an empty statement when not transactions have been pushed', () => {
        const account = new BankAccount;
        const statement = new BankStatement(account);
        expect(statement.format()).toEqual('date || credit || debit || balance');
    })
})

describe('BankStatement with Transaction and BankAccount', () => {
    it('return a single transaction being made for credit of 20', () => {
        const account = new BankAccount;
        const statement = new BankStatement(account);
        advanceTo(new Date(2023, 1, 20, 10, 0, 0))
        account.credit(20)
        expect(account.balance).toEqual(20);
        console.log(statement.format())
        expect(statement.format()).toEqual('date || credit || debit || balance\n' + `${new Date(2023, 1, 20).toLocaleDateString()} || 20 || || 20`);
    })
    it('return a single transaction being made for credit of 20 and debit of 20', () => {
        const account = new BankAccount;
        const statement = new BankStatement(account);
        advanceTo(new Date(2023, 1, 20, 10, 0, 0))
        account.credit(20)
        account.debit(20)
        expect(account.balance).toEqual(0);
        expect(statement.format()).toEqual('date || credit || debit || balance\n' + `${new Date(2023, 1, 20).toLocaleDateString()} || 20 || || 20\n` + `${new Date(2023, 1, 20).toLocaleDateString()} || || 20 || 0`  );
    })
    it('return a single transaction being made for credit of 20 and debit of 20', () => {
        const account = new BankAccount;
        const statement = new BankStatement(account);
        advanceTo(new Date(2023, 1, 20, 10, 0, 0))
        account.credit(200)
        account.debit(20)
        expect(account.balance).toEqual(180);
        expect(statement.format()).toEqual('date || credit || debit || balance\n' + `${new Date(2023, 1, 20).toLocaleDateString()} || 200 || || 200\n` + `${new Date(2023, 1, 20).toLocaleDateString()} || || 20 || 180`  );
    })
})