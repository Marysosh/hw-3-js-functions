/*

***** - 1 - *****
* Function accept 2 parameters:str and sp 
* str is a sentence, sp is a char as separator
* It returns words, divided into characters using separator sp

*/
function splitAndMerge(string, separator) {
  var words = string.split(" ");
  var characters = [];
  characters = words.map(function(item){
    return item.split("").join(separator);
  });
  return characters.join(" ");
}

/*

***** - 2 - *****
* Function accept 1 parameter: hash
* It returns hash converted into an array

*/
function convert(hash) {
  for (var key in hash) {
    hashArray.push([key, hash[key]]);
  }
  return hashArray;
}

/*

***** - 3 - *****
* Function accept 1 parameter: string with words separated by dash/underscores
* It returns converted dash/underscore delimited words into camel casing

*/
function toCamelCase(words) {
  var wordsArray;
  if (words.indexOf("-") === -1) {
    wordsArray = words.split("_");
  } else {
    wordsArray = words.split("-");
  }
  for (var i = 1; i < wordsArray.length; i++) {
      wordsArray[i] = wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1);
  }
  return wordsArray.join("");
}

/*

***** - 4 - *****
* Function accept 1 parameter: sentence(string)
* It returns sentence with reversed words

*/
function wordReverse(string) {
  var wordsArray = string.split(" ");
  wordsArray = wordsArray.map(function(item){
    return item.split("").reverse().join("");
  });
  return wordsArray.join(" ");
}

/*

***** - 5 - *****
* Function accept 1 parameter: a string that includes alphanumeric characters ('3a4B2d')
* It returns the expansion of that string: The numeric values represent the occurance of each letter following that numeric value

*/
function stringExpansion(string) {
  var currentNumber = 1;
  var result = "";
  for (var i = 0; i < string.length; i++) {
    if (!isNaN(Number(string[i]))) {
      currentNumber = Number(string[i]);
    } else {
      for (var j = 0; j < currentNumber; j++) {
        result += string[i];
      }
      currentNumber = 1;
    }
  }
  return result;
}

/*

***** - 6.1 - *****
* Function accept the list of arguments(numbers)
* It returns the largest number

*/
function largest() {
  var args = Array.prototype.slice.call(arguments, 0);
  return Math.max.apply(null, args);
}

/*

***** - 6.2 - *****
* Function accept the list of arguments(numbers)
* It returns the smallest number

*/
function smallest() {
  var args = Array.prototype.slice.call(arguments, 0);
  return Math.min.apply(null, args);
}

/*

***** - 7 - *****
* Function accept an array of numbers
* It returns array transformed to array of functions that return a value from a base array

*/
function transform(baseArray) {
  return baseArray.map(function(item){
    return function(){return item;}
  });
}

/*

***** - 8 - *****
* Function accept an arbitrary number of digit arguments
* It returns compound value of arguments

*/
function sum() {
  var args = Array.prototype.slice.call(arguments, 0);
  if (!args.length) {
    return 0;
  } else {
    return args[0] + sum.apply(this, args.slice(1));
  }
}

/*

***** - 9 - *****
* Function accept a number
* It returns values one by one from the passed number till zero with one second delay

*/
function countDown(number) {
  var currentNumber = number;
  var timer = setInterval ( function() {
    console.log(currentNumber);
    if (currentNumber == 0) {
      clearInterval(timer);
    };
    currentNumber--;
  }, 1000);
}

/*

***** - 10 - *****
* Function accept context as a first parameter and the list of arguments separated by comma
* It creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called

*/
Function.prototype.myBind = function() {
  var mainFunction = this;
  var context = arguments[0];
  var args = Array.prototype.slice.call(arguments, 0).slice(1);
  return function() {
    var mainFunctionArgs = args.concat(Array.prototype.slice.call(arguments, 0));
    return mainFunction.apply(context, mainFunctionArgs);
  };
}