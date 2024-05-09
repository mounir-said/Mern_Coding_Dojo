console.log(hello);                                   
var hello = 'world';

// after hosting 

var hello;
console.log(hello); // logs undefined
hello = 'world';

//Prediction: It will log undefined

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//after hosting

var needle;
function test(){
    var needle;
    needle = 'magnet';
    console.log(needle);
}
needle = 'haystack';
test();

// Prediction: It will log 'magnet'.

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// after hosting

var brendan;
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan); // logs 'super cool'

//Prediction: It will log 'super cool'.

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//After hoisting:

var food;
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food); // logs 'half-chicken'
    food = 'gone';
}
food = 'chicken';
console.log(food); // logs 'chicken'
eat();

//Prediction: It will log 'chicken' and then 'half-chicken'.

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// after hosting

var mean;
console.log(food); // logs undefined
console.log(food); // logs undefined
mean = function() {
    var food;
    food = "chicken";
    console.log(food); // logs 'chicken'
    food = "fish";
    console.log(food); // logs 'fish'
}
mean();
console.log(food); // logs undefined

//Prediction: It will log undefined twice, then 'chicken', 'fish', and finally undefined.

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//after hosting

var genre;
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre); // logs 'rock'
    genre = "r&b";
    console.log(genre); // logs 'r&b'
}
console.log(genre); // logs undefined
genre = "disco";
rewind();
console.log(genre); // logs 'disco'

//Prediction: It will log undefined, 'rock', 'r&b', and finally 'disco'.

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// after hosting

var dojo;
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo); // logs 'seattle'
    dojo = "burbank";
    console.log(dojo); // logs 'burbank'
}
dojo = "san jose";
console.log(dojo); // logs 'san jose'
learn();
console.log(dojo); // logs 'san jose'

//Prediction: It will log 'san jose', 'seattle', 'burbank', and finally 'san jose'.

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//Prediction: It will log an object with name and students properties for the first call, and it will throw an error for the second call because you cannot reassign a const variable.

