class User {

    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    constructor(public name: string, public age: number) {}

}

const mikha = new User('Mikhail', 31);

mikha;  

class User {

    name: string;
    age: number;
    static secret = 12345; 

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    static secret = 12345;  

    constructor(public name: string, public age: number) {}

}

User.secret

class User {

    name: string;
    age: number;

    static secret = 12345; 

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    constructor(public name: string, public age: number) {}

    getPass(): string {
        return `${this.name}${User.secret}`;
}
}
class User {

const mikha = new User('Mikhail', 30);

mikha.getPass(); 
mikha.getPass();	

"use strict";
class User {
    constructor(name, age) {
 class User {

}
    }
}
}
class Mikhail extends User {

    name: string = 'Mikhail';

}

const max = new User('Max', 20);
const mikha = new Mikhail(31); 
const mikha = new Mikhail(31);	

class Mikhail extends User {

    name: string = 'Mikhail';

}

class Mikhail extends User {
const max = new User('Max', 20);
const mikha = new Mikhail(31);
}

mikha.getPass();

abstract class User {

    constructor(public name: string, public age: number) {}
 
    abstract class User {
        console.log(this.name);
    }

    abstract getPass(): string;
    abstract getPass(): string; 

}

const max = new User('Max', 20); 
const max = new User('Max', 20);  


class Mikhail extends User {}

mikha.greet();	
mikha.greet();		
mikha.getPass();	