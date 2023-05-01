// hoist practice assignment

// After you've made your prediction, run the original code to find out if you were right! If your predictions were incorrect, look back at how the code is hoisted by the interpreter.

// 1

console.log(hello); // undefined
var hello = 'world';

// 2

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle); // magnet
}

// 3

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); // super cool

// 4

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// 5

console.log(mean)  // undefined
// mean(); // TypeError: mean is not a function
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);


// 6

console.log(genre); // undefined
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre); // rock
    var genre = "r&b";
    console.log(genre); // r&b
}
console.log(genre); // disco

// 7

dojo = "san jose";
console.log(dojo); // san jose
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo); // seattle
    var dojo = "burbank";
    console.log(dojo); // burbank
}
console.log(dojo); // san jose

// 8 Bonus ES6: const

console.log(makeDojo("Chicago", 65)); // Object {name: "Chicago", students: 65, hiring: true}
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; // TypeError: Assignment to constant variable.
    }
    return dojo;
}



