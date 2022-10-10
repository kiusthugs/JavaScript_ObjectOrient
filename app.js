class Person{
    constructor(name, pets, residence, hobbies) {
        this.name = name
        this.pets = pets
        this.residence = residence
        this.hobbies = hobbies
    }
    
    info() {

    }

    soundOff() {

    }

    addHobby(hobby) {
        this.hobbies.push(hobby)
    }

    removeHobby(hobby) {
        this.hobbies = this.hobbies.filter(el => el != hobby)
    }

    greeting() {
        console.log('Hello fellow person!')
    }
}


class Coder extends Person {
    constructor(name, pets, residence, hobbies) {
        super(name, pets, residence, hobbies)

        this.occupation = "Full Stack Web Developer"
    }

    greeting() {
        console.log('Hellow fellow coder!')
    }
}

let bob = new Person('Bob', 1, 'Apartment', ['Cooking', 'Hunting', 'Biking'])
let kirt = new Coder('Kirt', 0, 'House', ['Working Out', 'Watching Football', 'Gaming'])

console.log(bob)
bob.addHobby('Swimming')
bob.removeHobby('Cooking')
console.log(bob)
console.log(kirt)
bob.greeting()
kirt.greeting()

class Calculator {
    constructor(result = 0) {
        this.result = result
    }

    add (a, b) {
        let res; // logic for only one parameter given
        if (b === undefined) {
            res = this.result + a

        } else {
        return this.result = a + b
        }

        this.result = res
        return this.result
    }

    subtract (a, b) {
        let res; // logic for only one parameter given
        if (b === undefined) {
            res = this.result - a

        } else {
        return this.result = a - b
        }
        this.result = res
        return this.result
    }

    multiply(a, b) {
        let res; // logic for only one parameter given
        if (b === undefined) {
            res = this.result * a

        } else {
        this.result = a * b
        }
        this.result = res
        return this.result
    }

    divide(a, b) {
        let res; // logic for only one parameter given
        if (b === undefined) {
            res = this.result / a
            
        } else {
        return this.result = a / b
        }
        this.result = res
        return this.result
    }

    displayResult() {
        console.log(this.result)
    }
}

let calc = new Calculator()

calc.add(5,1)
calc.displayResult()
calc.subtract(2,1)
calc.displayResult()

calc.add(4)
calc.subtract(1)
calc.displayResult()