class USer{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const Ravi = new USer("Ravi")
//console.log(Ravi.createId());

class Teacher extends USer{
    constructor(username, email){
        super(username)
        this.email= email
    }
}

const iphone = new Teacher("iphone", "iphone@gmail.com")
iphone.logMe();
console.log(iphone.createId); // cant be accessed because of static