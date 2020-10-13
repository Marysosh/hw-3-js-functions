/*

***** - 1 - *****
* Function accept 2 parameters:str and sp 
* str is a sentence, sp is a char as separator
* It returns words, divided into characters using separator sp

*/
function splitAndMerge(string, separator) {
  var words = string.split(" ");
  var characters = [];
  var result = '';
  for (var i = 0; i < words.length; i++) {
    characters[i] = words[i].split("").join(separator);
  }
  result = characters.join(" ");
  return result;
}

/*

***** - 2 - *****
* Function accept 1 parameter: hash
* It returns hash converted into an array

*/
function convert(hash) {
  var hash_array = [];
  var i = 0;
  for (var key in hash) {
    var temp_array = [key, hash[key]];
    hash_array[i] = temp_array;
    i++;
  }
  return hash_array;
}

/*

***** - 3 - *****
* Function accept 1 parameter: string with words separated by dash/underscores
* It returns converted dash/underscore delimited words into camel casing

*/
function toCamelCase(words) {
  var words_array;
  if (words.indexOf("-") === -1) {
    words_array = words.split("_");
  } else {
    words_array = words.split("-");
  }
  for (var i = 1; i < words_array.length; i++) {
      words_array[i] = words_array[i][0].toUpperCase() + words_array[i].slice(1);
  }
  var result = words_array.join("");
  return result;
}

/*

***** - 4 - *****
* Function accept 1 parameter: sentence(string)
* It returns sentence with reversed words

*/
function wordReverse(string) {
  var words_array = string.split(" ");
  for (var i = 0; i < words_array.length; i++) {
    words_array[i] = words_array[i].split("").reverse().join("");
  }
  var result = words_array.join(" ");
  return result;
}

/*

***** - 5 - *****
* Function accept 1 parameter: a string that includes alphanumeric characters ('3a4B2d')
* It returns the expansion of that string: The numeric values represent the occurance of each letter following that numeric value

*/
function stringExpansion(string) {
  var current_number = 1;
  var result = "";
  for (var i = 0; i < string.length; i++) {
    if (!isNaN(Number(string[i]))) {
      current_number = Number(string[i]);
    } else {
      for (var j = 0; j < current_number; j++) {
        result += string[i];
      }
      current_number = 1;
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
  var args = Array.from(arguments);
  for (var i = 0; i < args.length; i++) {
    args[i] = Number(args[i]);
  }
  var sorted_array = args.sort(function(a, b) {
  return a - b;
  });
  var result = sorted_array[sorted_array.length-1];
  return result
}

/*

***** - 6.2 - *****
* Function accept the list of arguments(numbers)
* It returns the smallest number

*/
function smallest() {
  var args = Array.from(arguments);
  for (var i = 0; i < args.length; i++) {
    args[i] = Number(args[i]);
  }
  var sorted_array = args.sort(function(a, b) {
  return a - b;
  });
  var result = sorted_array[0];
  return result
}

/*

***** - 7 - *****
* Function accept an array of numbers
* It returns array transformed to array of functions that return a value from a base array

*/
function transform(baseArray) {
  newArray = [];
  function return_element(element) {
    return element;
  }
  for (var i = 0; i<baseArray.length; i++) {
    newArray[i] = return_element.bind(null, baseArray[i]);
  }
  return newArray;
}

/*

***** - 8 - *****
* Function accept an arbitrary number of digit arguments
* It returns compound value of arguments

*/
function sum() {
  var args = Array.from(arguments);
  if (args.length=== 1) {
    return args[0];
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
  var current_number = number;
  var timer = setInterval ( function() {
    console.log(current_number);
    if (current_number == 0) {
      clearInterval(timer);
    };
    current_number--;
  }, 1000);
}

/*

***** - 10 - *****
* Function accept context as a first parameter and the list of arguments separated by comma
* It creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called

*/
Function.prototype.myBind = function() {
  var main_function = this;
  var context = arguments[0];
  var args = Array.from(arguments).slice(1);
  return function() {
    var main_function_args = args.concat(Array.from(arguments));
    return main_function.apply(context, main_function_args);
  };
}