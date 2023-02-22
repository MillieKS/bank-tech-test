const BankAccount = require('./bankAccount');
// const Transactions = require('./transactions')


describe('BankAccount', () => {

    it('create a new bank account and the balance is 0', () => {
        const bankAccount = new BankAccount();
        expect(bankAccount.balance).toEqual(0);
    })
    it('create a new bank account, add 20 credit and the balance is 20', () => {
        const bankAccount = new BankAccount();
        bankAccount.credit(20)
        expect(bankAccount.balance).toEqual(20);
    })
    it('create a new bank account, add 25 credit and the balance is 20', () => {
        const bankAccount = new BankAccount();
        bankAccount.credit(25)
        expect(bankAccount.balance).toEqual(25);
    })
    it('create a new bank account, add 25 credit, then 25 and the balance is 50', () => {
        const bankAccount = new BankAccount();
        bankAccount.credit(25)
        bankAccount.credit(25)
        expect(bankAccount.balance).toEqual(50);
    });
    it('create a new bank account, add 25 credit, then 25 debit and the balance is 0', () => {
        const bankAccount = new BankAccount();
        bankAccount.credit(25)
        bankAccount.debit(25)
        expect(bankAccount.balance).toEqual(0);
    });
    it('create a new bank account, add 25 credit, then 20 debit and the balance is 5', () => {
        const bankAccount = new BankAccount();
        bankAccount.credit(25)
        bankAccount.debit(20)
        expect(bankAccount.balance).toEqual(5);
    });
    it('create a new bank account, add 25 credit, then 10 debit, then 25 credit and the balance is 40', () => {
        const bankAccount = new BankAccount();
        bankAccount.credit(25)
        bankAccount.debit(10)
        bankAccount.credit(25)
        expect(bankAccount.balance).toEqual(40);
    });
    it('throws an error message when you debit more than the balance', () => {
        const bankAccount = new BankAccount();
        expect(bankAccount.balance).toEqual(0);
        expect(() => bankAccount.debit(10)).toThrow("Insufficient funds");

        try {
            bankAccount.debit(10)
        } catch (err) {
            expect(err).toBe("Insufficient funds")
        }

    })

    it('throws an error when you debit more than the balance after credittinn 25', () => {
        const bankAccount = new BankAccount();
        bankAccount.credit(25)
        expect(bankAccount.balance).toEqual(25);
        expect(() => bankAccount.debit(500)).toThrow("Insufficient funds");

        try {
            bankAccount.debit(50)
        } catch (err) {
            expect(err).toBe("Insufficient funds")
        }

    })
    it('return transactions from getTransactions', () => {
        const bankAccount = new BankAccount();
        bankAccount.credit(25)
        bankAccount.debit(10)
        bankAccount.credit(25)
        expect(bankAccount.balance).toEqual(40);
        expect(bankAccount.getTransactions()).toEqual(bankAccount.transactions)
    });
});
