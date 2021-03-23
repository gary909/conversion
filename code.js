var data = "name|phone|address";
var val = data.substring(5, 10);
console.log("Substring is " + val);

//***********************/

var data = "name|phone|address";
var vals = data.split("|");
console.log("Split array is " , vals);

//***********************/

function Duck(sound) {
    this.sound = sound;
    this.quack = function() {console.log(this.sound);}
}

var toy = new Duck("quack quack");

toy.quack();

console.log(typeof toy);
console.log(toy instanceof Duck);