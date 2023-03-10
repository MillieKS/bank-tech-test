# {{PROBLEM}} Class Design Recipe

## 1. Describe the Problem

_Put or write the user story here. Add any clarifying notes you might have._

The User is able to make a Deposit
the User is able to make a withdrawal
the User has a bank account
the User is able to print a bank statement 
the User is able to print the bank statement in a certain format

## 2. Design the Class Interface

_Include the initializer and public methods with all parameters and return values._

```javascript
make deposit
make withdrawal
print statement 

bank_account = will be able to withdraw or deposit then push each transaction to transactions
bank_balance = 0 ->> will hold the balance

transactions = will hold all the transactions ->> date, amount, type: string// either credit or debit

bank_statement = will format the transactions and bank balance

## 2. Design the Class Interface

_Include the initializer and public methods with all parameters and return values._

```javascript
# EXAMPLE

Class Transaction () {
    constructor(date, amount, type, balance) {
        this.date = date;
        this.amount = amount;
        this.type = type;
        this.balance = balance
  }
}

Class BankAccount
    constructor() {
        balance = 0
    }

    credit() {

    }

    debit() {

    }
}
  
Class PrintStatement () {
    constructor(transactions) {
        this.transactions = transactions
    }

    print() {

    }
}
```

## 3. Create Examples as Tests

_Make a list of examples of how the class will behave in different situations.- avoid repeated tasks
- store added tasks
- if [] no tasks, return "no uncompleted tasks"


```
# EXAMPLE for Transaction class

# 1
create  a new bank account and the balance is 0 and transactions should be empty.
const bankAccount = new BankAccount
bankAccount.balance = 0
const transaction = []



# 2
create  anew bank account, add creadit( +20) and the balance is 20
const bankAccount = new BankAccount
bankAccount.balance = 0
bankAccount.credit(20)
bankAccount.balance = 20

# 3
create  anew bank account, debit( -20) and it should throw and error and balance should be 0
const bankAccount = new BankAccount
bankAccount.balance = 0
bankAccount.debit(20)
throw(err)
bankAccount.balance = 0

# 4 
create  anew bank account, add creadit( +20) and then debit 10 the balance is 10
const bankAccount = new BankAccount
bankAccount.balance = 0
bankAccount.credit(20)
bankAccount.debit(10)
bankAccount.balance = 10

# 5


# 6

```

_Encode each example as a test. You can add to the above list as you go._

## 4. Implement the Behaviour

_After each test you write, follow the test-driving process of red, green, refactor to implement the behaviour._


<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[????](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fgolden-square&prefill_File=resources%2Fsingle_class_recipe_template.md&prefill_Sentiment=????) [????](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fgolden-square&prefill_File=resources%2Fsingle_class_recipe_template.md&prefill_Sentiment=????) [????](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fgolden-square&prefill_File=resources%2Fsingle_class_recipe_template.md&prefill_Sentiment=????) [????](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fgolden-square&prefill_File=resources%2Fsingle_class_recipe_template.md&prefill_Sentiment=????) [????](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fgolden-square&prefill_File=resources%2Fsingle_class_recipe_template.md&prefill_Sentiment=????)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
