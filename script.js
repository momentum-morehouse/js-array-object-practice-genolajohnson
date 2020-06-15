//7
let colors = ["red", "blue", "purple", "green"]
//8
console.log(0)
//9
console.log(colors[2])
//10
colors[3] = "ultraviolet";
console.log(colors)
//11
fourthColor = "green";
colors[3] = fourthColor;
console.log(colors);
//12
colors[5] = ("orange");
console.log(colors);
//13
colors.unshift("navy");
console.log(colors);
//14
console.log(colors.length)
//15
colors.pop();
console.log(colors.length)
//16
for (let i = 0; i < colors.length; i++)
{
  console.log(colors[i]);
}
//17
for (let i = 0; i < colors.length; i++)
{
  console.log(i + ": " + colors[i]);
}
//18
let length = colors.length - 1 
let lastColor = colors[length]
console.log(lastColor)
//18a
let length.push = colors.length < 1
let lastColor = colors[length]
console.log(lastColor)
//19
let myPenguin = {
  character: "Misha",
  origin: "Penguin Lost",
  notes: "A cheeky penguin who gets in over his head in mafia affairs and political intrigue."
};
//20
console.log("Hello, I'm a penguin and my name is " + ["name"]myPenguin.character + "!");
//21
myPenguin.canFly = false;
//22
myPenguin.chirp = function() {
  console.log("CHIRP CHIRP!");
};
//23
myPenguin.sayHello = function() {
  console.log("Hello, I'm a penguin and my name is " + this.character + "!");
};
//24
myPenguin.sayHello();
//25
myPenguin.chara = "Penguin McPenguinFace";
myPenguin.sayHello();
//26
myPenguin.fly = function() {
  if (this.canFly) {
    console.log("I can fly!");
  } else {
    console.log("No flying for me!");
  }
};
//27
myPenguin.fly();
//28
myPenguin.canFly = true;
//29
myPenguin.fly();
//30
for (name in myPenguin) {
  console.log(name);
}
//31
for (name in myPenguin) {
  console.log(myPenguin[name]);
}
















