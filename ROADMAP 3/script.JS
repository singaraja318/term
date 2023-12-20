
// a. Print odd numbers in an array

function fnName() {
    console.log("function works");
}

let anousFunc = function () {
    console.log(" 1 3 5 7 9 11 ");
}

anousFunc();

// b. Convert all the strings to title caps in a string array

function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  console.log(toTitleCase("singaraj"));

  // c. Sum of all numbers in an array

let myNums = [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < myNums.length; i++ ) {
  sum += myNums[i];
}

console.log(sum) 

// d. Return all the prime numbers in an array

var a = [5, 9, 63, 29, 35, 6, 55, 23]
var prime = [];

function isPrime(item) {
    var identifier = item / 2;
      for (var j = 2; j <= identifier; j++) {
       if ((item % j) == 0) { 
        return false;
       } 
     }
     return true;
}
for (var index = 0; index < a.length; index++) {
  if (isPrime(a[index])) {
      prime.push(a[index])
  }
}

console.log(prime);

//e. Return all the palindromes in an array

function isPalindrome(str) {
    str = str.replace(/[^\w\d]/g, '').toLowerCase();
    const len = str.length;

    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(isPalindrome('A man, a plan, a canal, Panama!'));

// f. Return median of two sorted arrays of the same size.

const median = (a, b) => {
    
    let c = [...a, ...b].sort((a, b) => a - b);
    
    const half = c.length / 2 | 0;
    
    if (c.length % 2) return c[half];
    
    return (c[half] + c[half - 1]) / 2;
}

const arr1 = [1, 12, 15, 26, 38];
const arr2 = [2, 13, 17, 30, 45, 47];
console.log(median(arr1, arr2));

// g. Remove duplicates from an array

let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});

console.log(uniqueChars);

// h. Rotate an array by k times

const rotateArray2 = function(nums, k) {

  // reverse helper function
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  k %= nums.length;

  reverse(nums, 0, (nums.length - 1));
  reverse(nums, 0, (k - 1));
  reverse(nums, k, (nums.length - 1));

  return nums;
}

//2.Do the below programs in arrow functions.

// a.Print odd numbers in an array

const gfg = () => { 
  console.log( "1 3 5 7 9 11" ); 
} 

gfg();

// b.Convert all the strings to title caps in a string array


function toTitleCase(str) {
  return str.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}
console.log(toTitleCase("singaraj"));

// c. Sum of all numbers in an array

const arr = [23, 34, 77, 99, 324];
let num = (sum + arr);
for (let i = 0; i < arr.length; i++) {
  
}

console.log(num);

// d.Return all the prime numbers in an array

var a = [5, 9, 63, 29, 35, 6, 55, 23]
var prime = [];

function isPrime(item) {
    var identifier = item / 2;
      for (var j = 2; j <= identifier; j++) {
       if ((item % j) == 0) { 
        return false;
       } 
     }
     return true;
}
for (var index = 0; index < a.length; index++) {
  if (isPrime(a[index])) {
      prime.push(a[index])
  }
}

console.log(prime);

// e. Return all the palindromes in an array

function isPalindrome(str) {
  str = str.replace(/[^\w\d]/g, '').toLowerCase();
  const len = str.length;

  for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
  }

  return true;
}

console.log(isPalindrome('A man, a plan, a canal, Panama!'));