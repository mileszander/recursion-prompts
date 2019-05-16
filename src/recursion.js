/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
    if (n<0) {
        return null;
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n-1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
    var answ=0;
    if (array.length === 0) {
        return answ;
    } else { answ += array[0];
        }
    answ += sum(array.slice(1));
    return answ;
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(arr) {
    var array = arr.slice();
    var sum = 0;
  
    for (var i = 0; i < array.length; i++) {
      if (array[i] instanceof Array) {
        sum += arraySum(array[i]);
      }
      if (typeof array[i] === "number") {
        sum += array[i];
      }
    }
    return sum;
  };

// 4. Check if a number is even.
var isEven = function(n) {
    if (n < 0) {
        n = n * -1;
      }
    if ( n === 1) {
        return false;
    } else if (n === 0) {
        return true;
    } else { 
        return isEven(n - 2);
    }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
    var answ = (Math.abs(n)-1);
    if (n < 0) {
        answ *= -1;
    }
    if (n === 0 || n === 1 || n === -1) {
        return 0;
    } else  if (n < 1){ 
        return answ + sumBelow(n+1);
    } else  if (n > 1){ 
        return answ + sumBelow(n-1);
        }
};


// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
    if (x === y) {
        return [];
    }
    if (x + 1 === y || y + 1 === x) {
        return [];
    }
    if ( x < y) {
       return [x+1].concat(range(x+1, y));
    }
    if ( x > y) {
        return [x-1].concat(range(x-1, y));
     }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    if (exp === 0) {
        return 1;
    }
    if (base === 0) {
        return 0
    }
    if (exp < 0) {
        return (1/base) * (exponent(base, exp+1));
    }
    if (exp > 0) {
        return base * (exponent(base, exp-1))
    }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    if (n === 1) {
        return true;
    }
    if (n / 2 === 1) {
        return true;
    } 
    if (n / 2  > 0) {
        return powerOfTwo(n/2);
    } else {
        return false;
    }

};

// 9. Write a function that reverses a string.
var reverse = function(string) {
    if (string === "") {
        return ""
    }
    if (string.length >= 1) {
         return string[string.length-1].concat(reverse(string.slice(0,-1)));
    }   
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    str = string.toLowerCase();
    if(str.length === 1 || str.length === 0){
      return true;
    }else if(str[0] !== str[str.length-1]){
      return false;
    }
      return palindrome(str.slice(1,-1));
  }

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
    if (y === 0) { 
        return NaN;
    }
    if (x < 0 && y < 0) {
      if (x > y) { 
          return x; 
        }
    } else if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
      if (-x < y) { 
          return x; }
        return modulo(x + y, y);
    } else {
      if (x < y) { 
          return x; 
        }
    }
    return modulo(x - y, y);
  };

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
    if (x === 0 || y === 0) {
        return 0;
    }
    if (x > 0 && y > 0) {
        return x + multiply(x, y-1);
    } 
    if (x < 0 && y < 0 ) {
        return -x + multiply(x, y+1);
    } 
    if (x > 0 && y < 0) {
        return -x + multiply(x, y+1);
    }
    if (x < 0 && y > 0 ) {
        return x + multiply(x, y-1);
    }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
    var count = 0;
    if (y === 0) { 
        return NaN;
    }
    if (x < 0 && y < 0) {
      if (x > y) { 
          return 0; 
        }
    } else if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
        if (-x < y) { 
          return 0;
        }
      count++;
      return 1 + divide(x + y, y);
    } else {
      if (x < y) { 
          return 0; 
        }
    }
    return 1 + divide(x - y, y);
  };


// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
    var big;
    var little;
    var rem;
    if (x > y && x>0 && y>0) {
        if (x % y === 0) {
            return y;
        } else {
            return gcd(y,(x%y));
        }
    } 
    if (x < y && x>0 && y>0) {
        if (y % x === 0) {
            return x;
        } else {
            return gcd(x,(y%x));
        }
    } 
    return null;
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    if(str1 === "" && str2 === ""){
        return true;
    }
    if(str1[0] !== str2[0]){
        return false;
      }
        return compareStr(str1.slice(1),str2.slice(1));
    };

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
    // var arr = [];
    if(!str.length) {
        return [];
    }
    if (str.length > 0) {
        return [str[0]].concat(createArray(str.slice(1)));
   }   
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
    if(array.length === 0) {
        return [];
    }
    if (array.length > 0) {
        return [array[array.length-1]].concat(reverseArr(array.slice(0,-1)));
   }   
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
    if (length === 0) {
        return [];
    }
    if (length > 0) {
        return [value].concat(buildList(value, length -1))
    }
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']

var fizzBuzz = function(n) {
    if (n==1) {
        return ['1'];
    } else {
        if (n % 3 === 0 && n % 5 === 0) {
            var hold = fizzBuzz(n-1);
            hold.push("FizzBuzz");
            return hold;
        } else if (n % 5 === 0) {
            var hold = fizzBuzz(n-1);
            hold.push("Buzz");
            return hold;
        } else if (n % 3 === 0) {
            var hold = fizzBuzz(n-1);
            hold.push("Fizz");
            return hold;
        } else {
            var hold = fizzBuzz(n-1);
            hold.push("" + n);
            return hold;
        }

    }
};

    

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
    if (array.length === 0) {
        return 0;
    } else if (array[0]=== value) {
        return (1+(countOccurrence(array.slice(1),value)));
    } else {
        return (0+(countOccurrence(array.slice(1),value)));
    }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
    if (array.length === 0) {
        return [];
    } else {
        return [callback(array[0])].concat(rMap(array.slice(1),callback));
    }
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
    var answer = 0;
    for (var keys in obj) {
        if (keys === key) {
            answer++;
        }
        if (typeof obj[keys] === "object") {
            answer += countKeysInObj(obj[keys],key);
        }
    }
    return answer; 
};





// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
    var answer = 0;
    for (var key in obj) {
        if (obj[key] === value) {
            answer++;
        }
        if (typeof obj[key] === "object") {
            answer += countValuesInObj(obj[key],value);
        }
    }
    return answer; 
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
    for (var keys in obj) {
        if (keys === oldKey) {
            obj[newKey] = obj[oldKey];
            delete obj[oldKey];
        }
        if (typeof obj[keys] === "object") {
            replaceKeysInObj(obj[keys], oldKey, newKey);
        }
    }
    return obj;
};


// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
// var fibonacci = function(n) {
//     var answer = [0];
//     if (n === 0) {
//         return [];
//     } else {
//        if (answer.length === 1){        
//         answer.push(1);
//         }else {
//         var hold = answer[answer.length-1]+answer[answer.length-2]
//         answer.push(hold);
//         }
//         return fibonacci(n-1).concat(answer)
//     }
// };

var fibonacci = function(n) {
    if (n<=0) {
        return null;
    }
    if (n===1) {
        return [0,1];
    } else {
        var hold = fibonacci(n-1);
        hold.push(hold[hold.length-1]+hold[hold.length-2]);
        return hold;
    }
}


// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2


var nthFibo = function(n) {
    if (n<0) {
        return null;
    }
    if (n===0) {
        return 0;
    }
    if (n===1) {
        return 1;
    } else {
        return nthFibo(n-1) + nthFibo(n-2)
    };
}






// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
    var arr = [];
    if (array.length === 0) {
        return [];
    } 
    for (let i =0; i<array.length; i++) {
        if (array[i] instanceof Array) {
            arr.push(capitalizeWords(array[i]).toUpperCase())
        } else {
            arr.push(array[i].toUpperCase())
        }
    }
    return arr;
};


// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
    var arr = []
    if (array.length === 0) {
        return [];
    } else {
        return ([array[0].charAt(0).toUpperCase()+array[0].slice(1)].concat(capitalizeFirst(array.slice(1))));
    }
}
// return arr.push((array[0].charAt(0).toUpperCase())+array[0].concat(capitalizeFirst(array.slice(1)))

// return [array[array.length-1]].concat(reverseArr(array.slice(0,-1)));

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) { 
    var answer = 0
    for (var key in obj) {
        if (obj[key] % 2 ===0) {
            answer += obj[key];
        }
        if (typeof obj[key] === "object") {
            answer += nestedEvenSum(obj[key]);
        }
    }
    return answer;
};



// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
function flatten (array) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        arr = arr.concat(flatten(array[i]));
      } else {
        arr.push(array[i]);
      }
    }
    return arr;
  }


// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}


var letterTally = function(str,obj ={}) {
        if (str.length === 0) {
            return obj;
        }
        if (str[0] in obj) {
            obj[str[0]]++;
        } else {
            obj[str[0]] = 1;
        }
        return letterTally(str.substring(1),obj);
    }



// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
	if(list.length===0) {
		return [];
	}
	if(list[0] === list [1]) {
		return compress(list.slice(1))
	} else {
		return [list[0]].concat(compress(list.slice(1)))
	}
};




// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        arr = arr.concat(augmentElements(array[i],aug));
      } else {
        arr.push([array[0], aug]);
      }
    }
    return arr;
  }

  var augmentElements = function(array, aug) {
      var arr = []
      if (array.length === 0) {
          return [];
      } else {
          arr.push(array[0].concat(aug))
      }
      return arr.concat(augmentElements(array.slice(1), aug))
    }


// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
    var arr =[]
    if (array.length === 0) {
        return [];
    } else if (array[0] !== 0) {
        arr.push(array[0]);
    } else if (array[1] === 0) {
    } else {
        arr.push(array[0]);
    }
    return arr.concat(minimizeZeroes(array.slice(1)))
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
    if (array.length === 0) { return array; }
    if(array[0] < 0) { 
        array[0] = -array[0]; 
    }
    if(array[1] > 0) { 
        array[1] = -array[1]; 
    }
    return [array[0], array[1]].concat(alternateSign(array.slice(2)));
};
// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
    var arr = [];
    var obj = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'    
    }
    if (Array.isArray(str)) {
        strArr = str;
    } else {
        var strArr = str.split(' ');
    }
    if (strArr.length === 0) {
        return[];
    }
    if (obj.hasOwnProperty(strArr[0])) {
        arr.push(obj[strArr[0]]);
    } else {
        arr.push(strArr[0]) 
    }
    return arr.concat(numToText(strArr.slice(1))).join(' ');
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
	var arr = array.slice();
	if (min === undefined) {
        min = 0;
    }
	if (max === undefined) {
        max = array.length - 1;
    }

	var guess = Math.floor(((max - min) / 2) + min);
    if (max <= min && arr[guess] !== target) {
        return null;
    } else if (arr[guess] === target) {
        return guess;
    } else if (arr[guess] < target) {
        return binarySearch(arr, target, guess + 1, max);
    }else {
        return binarySearch(arr, target, min, guess - 1);
    }
};   

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
// Merge the two arrays: left and right
function mergeSort (unsortedArray) {
    // No need to sort the array if the array only has one element or empty
    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }
    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.floor(unsortedArray.length / 2);
  
    // This is where we will be dividing the array into left and right
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);
  
    // Using recursion to combine the left and right
    return merge(
      mergeSort(left), mergeSort(right)
    );
  }
function merge (left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
  
    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; // move left array cursor
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++; // move right array cursor
      }
    }
  
    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
  }

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
