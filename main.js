/*
 Tips 1: Remove Falsy values from array
 */

// False values: false, NaN, Undifiend, 0, Blank Valuem null

const values = [1, false, 2, 3, NaN, 0, undefined, 3];
const result = values.filter(Boolean);
console.log(result);

/*
Tips 2: Convert any value to boolean
*/ 

// !!/Boolean convert any value as boolean .

console.log(!!"Hasan");
console.log(!!1);
console.log(Boolean(3.00))

/*
Tips 3: Resizing array
*/

const newArray =[1,2,3,4,5,6,7];
newArray.length = 4;
console.log(newArray);

/*
Tips 4: Flatten multi-dimentional array
*/ 

const multiArray = [1, 3, [3, 5,6], [3, [5], 6, 6]];

const multiResult = multiArray.flat();
console.log(multiArray.flat(Infinity));  // array.flat(Infinity) convert flatten array from multi-dimentional array

/*
 tips 5: Short conditionals
*/

// const year = 2022;
// if(year === 2022){
//     console.log("this is a new year");
// }

// we can use && short conditionals for shorten the array
const year = 2022;
year === 2022 && console.log("This is a new year");

const newYear = 2022;
newYear === 2021 || console.log("this is not a new year");

/*
Tips 6: Replace all occurrences of a string
*/ 

const occuArray = "2022 is a old year, and today is 2nd January. I wish my Old year will be great and happy";
console.log(occuArray.replace(/old/ig, "new"));

/*
Tips 7: Logs values with variable names
*/
const framework = "jQuery";
const library = "React";
console.log({framework});
console.log({library})

/* 
tips 8: Know performance of task
*/

var startTime = performance.now();

for (var i=0; i <= 2; i++){
    console.log(i);
}

var endTime = performance.now();
console.log(`this problem took ${endTime =startTime} milliseconds`);


/*
tips 9: How to swap values
*/

let array = [1, 2, 3, 4, 5]

// with temp variable

let temp = array[1]
array[1] = array[3]
array [3] = temp;


console.log(array);

// array distructuring

let a = 1;
let b = 5;

[a, b] = [b, a]
console.log(a,b);

/*
tips 10: Copy thing from clipboard
*/
function copyToClipBoard(str){
    let element = document.createElement("textarea");
    element.value = str;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
}

function handleClick(){
    let text = document.querySelector("#date");
    copyToClipBoard(text.innerText);
}

/*
tips 11: Destructure objects by aliases
*/

const objectArray = {
    name : "HTML",
    inventedYear : "Tim Berners-Lee",
    founder : "1999"
}

const {name: languageName, inventedYear: inventedOfYear} = objectArray;

console.log(languageName, inventedOfYear);

/*
tips 12: get value as data type
*/

const newElement = document.querySelector("#number").valueAsNumber;
console.log(typeof newElement);

/*
tips 13: Remove duplicates from an array
*/

const dupArray = [2, 3, 4, 5, 5, 6, 6, 4, 3, 5, 3, 5]; 
const setArray = [...new Set(dupArray)];  // spreed operator and Set function
console.log(setArray);


/*
tips 14: compare two arrays by value
*/
const hasSameElements = (a, b) =>{
    return a.length === b.length && a.every((v, i)=>(v === b[i]));
}

console.log(hasSameElements([1,3], [1,3]))

/*
tips 15: suffle array elements randomly
*/

const suffleNumber = [1, 2, 3, 4, 5, 6, 7];
console.log(suffleNumber.sort(() => Math.random() - .5));

/*
tips 16: comma operator
*/

let x = 1;
x =(x++, x);
console.log(x);

let y = (1,3);
console.log(y);













