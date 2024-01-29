// this is just a commnet line
console.log("program is executed.");

console.log("Bitwise");
// 1 = 00000001
// 2 = 00000010

// Result = 00000011
console.log(1 | 2); //Bitwise OR ile yetkilendirme yapılabilir.
// Result= 00000000
console.log(1 & 2); //Bitwise AND ile sorgu yapılabilir.

// Read, Write , Execute yetkilendirme programı örneği.
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission;

let message = myPermission & readPermission ? "yes" : "no";
console.log(message);

let x = 2 + 3 * 4;

console.log(x);

let y = (2 + 3) * 4;

console.log(y);

//for-in loop
const person = {
  name: "Atakan",
  age: 20,
};

for (let key in person) {
  console.log(key, person[key]);
}

//for-of loop
const colors = ["red", "pink", "blue"];

for (let color of colors) {
  console.log(color);
}

//is the screen landscape mode
function isLandscape(width, height) {
  return width > height;
}
//printing the status
function print(horizontal, vertical) {
  console.log(isLandscape(horizontal, vertical));
}

//calling print func
print(513, 123);

//FizzBuzz algorithm example
function fizzBuzz(input) {
  if (input % 3 === 0 && input % 5 === 0) {
    return "FizzBuzz";
  } else if (input % 3 === 0) {
    return "Fizz";
  } else if (input % 5 === 0) {
    return "Buzz";
  } else if (typeof input !== "number") {
    return NaN;
  } else if (input % 3 !== 0 && input % 5 !== 0) {
    return input;
  }
}

const output = fizzBuzz("sa");
console.log(output);

//speed checker program
function checkSpeed(speed) {
  let pointCounter = 0;
  let speedLimit = 70;
  let kmPerPoint = 5;
  pointCounter = Math.floor((speed - speedLimit) / kmPerPoint);
  console.log("speed limit is: " + 70);
  console.log("every 5 kmph that over the limit is: " + 1 + " point");

  if (speed < speedLimit + kmPerPoint) {
    return console.log("ok");
  } else if (Math.floor(speed) >= speedLimit && pointCounter >= 12) {
    return console.log("license suspended!");
  } else {
    return console.log("Points: " + pointCounter);
  }
}

checkSpeed(75);

//func that right on the console is numbers even or odd
function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}

showNumbers(3);

//truthy
const isActive = true;
const name = "atakan";
if (isActive) console.log("hello");
//the real true value
if (name) console.log("hello");
//the if statement returns a truthy value.

//falsy for-of func example
//undefined
//null
//''/""
//false
//0
//NaN
const array = [0, undefined, null, "", 1, 3, "Atakan"];

console.log(countTruthy(array));

function countTruthy(array) {
  let counter = 0;
  for (let value of array)
    if (value) {
      counter++;
    }
  return counter;
}

//for-in func example
const movie = {
  title: "a",
  releaseYear: 2019,
  rating: 4.1,
  director: "b",
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj)
    if (typeof obj[key] === "string") console.log(key, obj[key]);
}

//sum of the multiplier of input
function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++)
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  return sum;
}
console.log(sum(10));

//grade calculator program
const grades = [100, 30, 45];

function calculateAvarage(marks) {
  let sum = 0;
  let avarage;

  for (mark of marks) {
    sum += mark;
    avarage = sum / marks.length;
  }
  console.log("avarage grade is:", Math.floor(avarage));
  return avarage;
}

function calculateGrade(func) {
  if (func < 50) return "FF";
  else if (func < 60) return "C1";
  else if (func < 70) return "C2";
  else if (func < 80) return "B2";
  else if (func < 90) return "B1";
  else return "A";
}

console.log(calculateGrade(calculateAvarage(grades)));

//show stars
function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) pattern += "*";
    console.log(pattern);
  }
}

showStars(10);

// Prime(whose factors are only 1 and itself)
// Composite
function showPrimes(limit) {
  //this for statment checking if the input has prime factors
  for (let number = 2; number < limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  //this for statment searching for factors of "number" local variable
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) {
      return false;
    }
  }
  return true;
}

showPrimes(11);

//**Object-oriented Programming (OOP)**\\

//constructor function
function staff(name, surname, age, registerYear) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.registerYear = registerYear;
  this.expCalculate = function () {
    return console.log(new Date().getFullYear() - this.registerYear);
  };
}

const myStaff = new staff("atakan", "baltaci", 21, 2016);
myStaff.expCalculate();
console.log(myStaff);

const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

for (let key in circle) {
  console.log(key, circle[key]);
}

//for-of --> for(let key of circle){native kod} is only-
//works for maps and array
for (let key of Object.keys(circle)) {
  console.log(key);
}

for (let entry of Object.entries(circle)) {
  console.log(entry);
}

if ("color" in circle) console.log("yes");

//old method for copy an objects property to another
/*
const another = {};
for (let key in circle) {
  another[key] = circle[key];
}
*/

//modern way to copy an object
const another = Object.assign(
  {
    color: "yellow",
  },
  circle //
);

//best simple method "..." for copy a obj
const anothersCopy = { ...another };

console.log(another);
console.log(anothersCopy);

//Template literals ``

let totalList = 1042;
const sender = "Atakan";
const recipient = "Josh";

const mail = `
Hi ${recipient}

Thank you for joining my mailing list.
There is ${totalList + 1} person with you in our mailing list.

Regards
${sender}`;

console.log(mail);

//street
//city
//zipCode
//showAdress(adress)

//we can write the same code with a contructor func
let Adress = {
  street: "Mecidiye",
  city: "İstanbul",
  zipCode: 34900,
};

//for-in
function showAdress(obj) {
  for (key in obj) {
    console.log(key, obj[key]);
  }
}

//factory function - camelCase
function createAdress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

let adress1 = createAdress("sazlıpınar", "istanbul", 34900);
console.log(adress1);

let adress2 = new CreateAdress("sazlıpınar", "istanbul", 34900);
console.log(adress2);

let adress3 = adress1;

//contructor function - PascalCase
function CreateAdress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

function areEqual(adress1, adress2) {
  return (
    adress1.street === adress2.street &&
    adress1.city === adress2.city &&
    adress1.zipCode === adress2.zipCode
  );
}

function areSame(adress1, adress2) {
  return adress1 === adress2;
}

console.log(areEqual(adress1, adress2));
console.log(areSame(adress1, adress2));
console.log(areSame(adress1, adress3));

//Blog Post Object

//title
//body
//author
//views
/*comments = {
  author:,
  body:,
}
*/
//isLive

function Post(title, body, author, views, comment, isLive) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comment = [];
  this.isLive = false;
}

let comment = {
  author: "johnsmith99",
  body: "test comment test comment test comment test comment test comment",
};

let post1 = new Post(
  "title",
  "test test test test test",
  "atakanbltci61",
  3210,
  comment,
  true
);

console.log(post1);

//arrays

const nums = [3, 4];

//end
nums.push(5, 6);

//beginning
nums.unshift(1, 2);

//middle
nums.splice(2, 0, "a", "b");

console.log(nums);

//finding elements(referance types)
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

const course = courses.find(function (courses) {
  return courses.name === "a";
});

//arrow function
const courseIndex = courses.findIndex((courses) => courses.name === "a");

console.log(course);
console.log(courseIndex);

//how to empty a array
let numArray = [-1, 0, 1, 2, 3, 4, 5, 1]; /******numArray******/
let anotherArray = numArray;

//solution 1
// numArray = [];

//solution 2
// numArray.length = 0;

console.log(anotherArray);
console.log(numArray);

const combined = [...numArray, "a", ...anotherArray, "b"];

console.log(combined);

for (let numbers of numArray) console.log(numbers);

numArray.forEach((nums, index) => console.log(nums, index));

//joining arrays
const joined = numArray.join(",");
console.log(joined);

//Seperators
const myBlogTitle = "this is my message";
const parts = myBlogTitle.split(" ");
console.log(parts);

const allPositive = numArray.every((value) => value >= 0);
console.log(allPositive);

const atLeastOnePositive = numArray.some((value) => value >= 0);
console.log(atLeastOnePositive);

const filtered = numArray.filter((value) => value >= 0);
console.log(filtered);

//array mapping
const items = filtered.map((n) => "<li>" + n + "</li>");

const html = "<ul>" + items.join("") + "</ul>";

console.log(html);

//mapping with objects and chaining
const itemMapping = numArray
  .filter((n) => n >= 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value >= 2)
  .map((obj) => obj.value);

console.log(itemMapping);

//reducing an array
let result = 0;
for (let n of numArray) {
  result += n;
}

console.log(result);

//better metode
const resultReduce = numArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(resultReduce);

//array from range function
function arrayFromRange(min, max) {
  const outputRange = [];
  for (let i = min; i <= max; i++) {
    outputRange.push(i);
  }
  console.log(outputRange);
}

arrayFromRange(-10, 6);

//include class - exmp -> numArray.include();
function isIncluded(array, searchElement) {
  for (element of array) {
    if (element === searchElement) return true;
  }
  return false;
}

const includeCheck = console.log(isIncluded(numArray, 5));

//except class ***String to array -> Array.from(stringName)***
function expect(array, excluded) {
  const outputExpect = [];
  for (element of array)
    if (!Array.from(excluded).includes(element)) outputExpect.push(element);

  return outputExpect;
}

const expectPrinter = console.log(expect(numArray, [1, 2]));

//move function*

/*
code body
*/

function getMax(array) {
  let maxElement = array[0];
  if (array.length === 0) return undefined;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }
  return maxElement;
}

console.log(getMax(numArray));

//important * sorting arrays
const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

const filteredMovies = movies
  .filter((movie) => movie.year === 2018 && movie.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((movies) => movies.title);

console.log(filteredMovies);

//hoisting -> javascript engine moves *****
//the function declarations to top of the file *****

walk();

function walk() {
  console.log("walk");
}

//rest operator ... - arguments/args

function totalPrice(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(totalPrice(0.1, 20, 30, 1));

//default parameters and logic - truthy
function interest(principal, rate, years = 5) {
  rate = rate || 2.5;

  return ((principal * rate) / 100) * years;
}

console.log(interest(10000));

//getters and setters - split method1
const personalInfo = {
  firstName: "Atakan",
  lastName: "Baltaci",
  get fullName() {
    return `${personalInfo.firstName} ${personalInfo.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") throw new Error("Value is not a string");

    const parts = value.split("-");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

personalInfo.fullName = "John-Smith";

console.log(personalInfo);

//var -> function scope
// ES6 (ES2015): let, const -> block-scoped

//this keyword
//method -> obj
//function -> global (window, global)

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(
      (tag) => {
        console.log(this.title, tag);
      } /*.bind(this) is an old example*/
    ); //instade of the second parameter of forEach
    //we can define a const that named "self" and
    //call it "this". now can use "self" inside of the func instead of "this"
    //but its not recommended
    //we can just use arrow func and "this" inherits to obj
    //arrow func is the best method for that problem
  },
};

video.showTags();

//sum([1,2,3,4]) => 10
function reducer(...args) {
  const total = args.reduce((a, b) => a + b);
  return total;
}

console.log(reducer(3, 2, 3, 5));

//circle.radius: 2
//consol.log(circle.area)

const pi = 3.14;

const circleCreater = {
  radius: 2,
  get area() {
    return this.radius * this.radius * Math.PI;
  },
};

const circleArea1 = console.log(circleCreater.area);

//error catch
//count occurrences function
try {
  const testArray = [...numArray];
  const occurrences = countOccurrences(testArray, 1);
  console.log(occurrences);
} catch (e) {
  console.log(e.message);
}
function countOccurrences(array, searchElement) {
  let counter = 0;
  if (!Array.isArray(array)) throw new Error("Invalid array.");

  for (elements of array) {
    if (elements === searchElement) {
      counter++;
    }
  }
  return counter;
}
