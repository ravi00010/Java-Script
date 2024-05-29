class User {
    constructor(email, password){
        this.email = email;
        this.password= password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
         this._email = value
    }

    get password(){
        return `${this._password}Ravi`
    }

    set password(value){
        this._password = value
    }
}

const Ravi = new User("Ravi@gmail", "123")
console.log(Ravi.password);