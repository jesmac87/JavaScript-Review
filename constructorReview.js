//Create a Animal Constructor that has the following parameters. species, name, legs, color, food 
//(which is an array of foods they can eat).

//code here
var Animal = function(species, name, legs, color, foodArray) {
    this.species = species;
    this.name = name;
    this.legs = legs;
    this.color = color;
    this.food = foodArray;

};


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

//code here
var person = function(name, age, height, gender) {
    var person = {
        name: name,
        age: age,
        height: height,
        gender: gender
    };
    return person;
};


//Create a animal array and a person array.

//code here
var animals = [];
var persons = [];


//Create two instances of Animal and push those into your animal array

//code here
var bird = new Animal('bird', 'waldo', 2, 'blue', ['worms', 'seeds']);
var lion = new Animal('mammal', 'simba', 4, 'yellow', ['gazelle', 'hyena', 'carcass']);

animals.push(bird, lion);

//Create two instances of person and push those into your person array.

//code here
var jesse = person('jesse', 27, "6'", 'male');
var kara = person('kara', 27, "5'4\"", 'female');

persons.push(jesse, kara);

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances 
//food array, then alert "(name) ' ate ' (whichever food was chosen)".

//code here
Animal.prototype.eat = function() {
    var randomFood = Math.floor(Math.random() * this.food.length);
    alert(this.name + ' ate ' + this.food[randomFood]);

};

//At this point, if we wanted to add something to every instance of person could we? 
person.prototype.legs = function() {
    alert(this.name + " has 2 legs");

};

//Yes or no? and why or why not?



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/
