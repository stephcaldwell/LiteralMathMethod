// The Literal Math Method Exercise
// 1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";

// 1b
console.log(warmHugs.toUpperCase());

// 1c
warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs);

// 2a
let beenImpaled = "Oh, look at that. I've been impaled.";

// 2b
console.log(beenImpaled.slice(18));
console.log(beenImpaled.slice(-18));
console.log(beenImpaled.slice(beenImpaled.indexOf("I")));

// 3a
let dotDotDot = "...";

// 3b
let skullBones = `I don't have a skull${dotDotDot}or bones.`;
console.log(skullBones);

// 4
console.log(Math.PI);

// 5
let randomNumber = Math.random();
randomNumber *= 3;
randomNumber = Math.floor(randomNumber);
randomNumber++;
console.log(randomNumber);

// BONUS
// 6
console.log(" Let It Go!".repeat(2).trim().toUpperCase());

// 7a
let reindeers = "Reindeers are better than people.";

// 7b
console.log(reindeers.replace(/ /g, "_"));
console.log(reindeers.replaceAll(" ", "_"));

// 8
console.log(Math.sqrt(2));
console.log(Math.SQRT2);
console.log(2**(1/2));

// 9
// Completed on separate lines
// let newRandomNumber = Math.random();
// newRandomNumber *= 17;
// newRandomNumber = Math.floor(newRandomNumber);
// newRandomNumber += 7;

// Extra Bonus: Completed on a single line
let randomNumber = Math.floor(17 * Math.random()) + 7;
// let randomNumber = Math.floor(random number from 0 up to 17) + 7;
// let randomNumber = random whole number from 0 to 16 + 7;
// let randomNumber = random whole number from 7 to 23;

let randomNumber = Math.floor(Math.random() * 17) + 7;
let randomNumber = Math.floor(Math.random() * 17 + 7);
console.log(newRandomNumber);