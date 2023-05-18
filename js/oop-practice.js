// STEP 1
/*
    function Cat() {
    
    }

    const Dog = function() {

    }
*/
// STEP 2
/*
    const cat1 = new Cat()
    const dog1 = new Dog()
*/
// STEP 3
/*
    class Animal {
        constructor() {
            console.log('The Animal has been created')
        }
    }
*/
// STEP 4
/*
    class Animal {
        constructor(message) {
            console.log(message)
        }
    }
*/
// STEP 5
/*
    function Animal(type, breed, color, height, length) {
        this._type = type
        this._breed = breed
        this._color = color
        this._height = height
        this._length = length
    }

    const Animal1 = new Animal('Dog', 'Golden Retriever', 'Golden', '3 ft', '5 ft')
*/
// STEP 6
/*
    for (const property in Animal1) {
        console.log(`${property}: ${Animal1[property]}`)
    }
*/
// STEP 7
/*
    function Animal(type, color) {
        this._type = type
        this._color = color
        this.speak = function() {
            if (type == 'dog') {
                return `The ${this._color} dog is barking!`
            } else {
                return `The ${this._color} cat is meowing!`
            }
        }
    }
    const Animal1 = new Animal('dog', 'golden')
    const Animal2 = new Animal('cat', 'black')

    Animal1.speak()
*/
// STEP 8
/*
    function Animal(type, breed, color, height, length) {
        let _type = type
        let _breed = breed
        let _color = color
        let _height = height
        let _length = length
        let checkType = function() {
            if (_type == 'dog') {
                return 'dog'
            } else {
                return 'cat'
            }
        }
        this.speak = function() {
            return `The ${checkType()} has made a noise!`
        }
    }

    const Animal1 = new Animal('dog', 'Golden Retriever', 'Golden', '3 ft', '5 ft')
    const Animal2 = new Animal('cat', 'Bengal', 'Mixed', '1 ft', '2.5 ft')
    Animal1.speak()
*/
// STEP 9
/*
const String  = function(string) {
    this.findWords = function(string) {
        console.log(string.match(/[text]\d{4}/g))
    }
}

String.prototype = new String('This is my string text. It is a text block.')
*/