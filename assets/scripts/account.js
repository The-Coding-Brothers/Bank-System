export default class Account {
    constructor(name, lastName){
        this.agency = '0001';
        this.name = name;
        this.lastName = lastName;
        this.balance = 50;
        this.isPremium = false;
    }

    login(){
       return `Hello ${this.name} ${this.lastName}!<br>Welcome to the Code Brothers Bank<br>What do you want to do today?`;
    }

    deposit(value){
        this.balance += value; 
    }

    withdraw(value) {
        if(this.balance < value) {
            console.log('Insufficient value.')
        } else {
            this.balance -= value;
            console.log(`You withdrew $${value}`)
        }
    }

    checkBalance() {
        console.log(`Your current balance is: $${this.balance}.`)
        if(this.isPremium) {
            console.log('Congratulations, you have a premium account.')
        } else {
            console.log('Sorry, you are not a premium user.')
        }
    }

    purchasePremium() {
        if(this.isPremium) {
            console.log('You alredy have a premium account.')
        } else if  (this.balance >= 10) {
            this.balance -= 10;
            this.isPremium = true;
            console.log('Congratulations, you have just acquired a premium account.')
            console.log(`Your current balance is: $${this.balance}.`)
        } else {
            console.log('Sorry, you have insuficient funds.')
        }
    }

    requestLoan(value) {
        if(this.isPremium && value <= 500) {
            this.balance += value;
            console.log(`Congratulations, you have just acquire a loan. Your current balance is: $${this.balance}.`)
        } else {
            console.log('You don\'t have a premium account or requested more than $500,00.') 
        }
    }

    // Crie um método chamado fazerPix que recebe um value e uma conta e subtrai do saldo atual e deposita na conta informada
}
