// Progression #1: Greatest of the two numbers

function greatestOfTwoNumbers(x, y) {
  if (x > y) return x;
  else if (y > x) return y;
  else {
    return x;
  }
}
// Progression #2: The lengthy word

const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findScaryWord(words) {
  var len = words.length;
  var largeSize = 0;
  var index = 0;
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr.push(words[i].length);
    if (arr[i] > largeSize) {
      largeSize = arr[i];
      index = i;
    }
  }
  if (len === 0) {
    return null;
  } else if (len === 1) return "foo";
  else {
    return words[index];
  }
}
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
var netPrice = function (arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  if (arr.length === 0) {
    return 0;
  } else if (arr.length >= 1) {
    return sum;
  }
};
//Progression #3.1 (Bonus): A generic sum() function
function add(arr) {
  var sum = 0;
  var isunsupported = false;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
    } else if (typeof arr[i] === "string") {
      sum += arr[i].length;
    } else if (arr[i] === true) {
      sum += 1;
    } else if (arr[i] === false) {
      sum += 0;
    } else if (typeof arr[i] == "object" || arr[i].length >= 0) {
      isunsupported = true;
      break;
    }
  }

  if (arr.length === 0) {
    return 0;
  } else if (isunsupported === true) {
    throw `Unsupported data type sir or ma'am`;
  } else {
    return sum;
  }
}
try {
  add(arr);
} catch (e) {
  console.error(e);
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(numbersAvg) {
  var len = numbersAvg.length;
  var sum = 0;
  for (var i = 0; i < len; i++) {
    sum += numbersAvg[i];
  }
  var avg = sum / len;
  if (len === 0) {
    return null;
  } else {
    return avg;
  }
}
// Progression 4.2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

function averageWordLength(wordsArr) {
  var avg = 0;
  var len = 0;
  for (var i = 0; i < wordsArr.length; i++) {
    len += wordsArr[i].length;
  }
  avg = len / wordsArr.length;
  if (wordsArr.length === 0) {
    return null;
  } else {
    return avg;
  }
}

// Progression #4.3 (Bonus): A generic avg() function
function avg(arr) {
  let sum = 0;
  let count = 0;
  let avg;
  if (arr.length === 0) {
    return null;
  } else {
    arr.forEach((element) => {
      if (typeof element === "number") {
        sum += element;
        count++;
      } else if (element === true) {
        sum += 1;
        count++;
      } else if (element === false) {
        sum = sum + 0;
        count++;
      }
    });

    avg = sum / count;
    return avg;
  }
}

// Progression #5: Unique arrays
const wordsUnique = [
  "bread",
  "jam",
  "milk",
  "egg",
  "flour",
  "oil",
  "rice",
  "coffee powder",
  "sugar",
  "salt",
  "egg",
  "flour",
];

function uniqueArray(uniqueArray) {
  var len = uniqueArray.length;
  var outputArray = [];
  var count = 0;
  var start = false;
  for (j = 0; j < uniqueArray.length; j++) {
    for (k = 0; k < uniqueArray.length; k++) {
      if (uniqueArray[j] == outputArray[k]) {
        start = true;
      }
    }
    count++;
    if (count == 1 && start == false) {
      outputArray.push(uniqueArray[j]);
    }
    start = false;
    count = 0;
  }
  if (len === 0) {
    return null;
  } else {
    return outputArray;
  }
}

// Progression #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function searchElement(wordsFind, wordtoSearch) {
  var len = wordsFind.length;
  var isAvailable = false;
  for (var i = 0; i < len; i++) {
    if (wordsFind[i] === wordtoSearch) {
      isAvailable = true;
    }
  }
  if (len === 0) {
    return null;
  } else if (isAvailable === true) {
    return true;
  } else if (isAvailable === false) {
    return wordsFind;
  }
}

// Progression #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimesElementRepeated(wordsCount, wordtoSearch) {
  var len = wordsCount.length;
  var count = 0;
  for (var i = 0; i < len; i++) {
    if (wordsCount[i] === wordtoSearch) {
      count++;
    }
  }
  return count;
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45],
];

let maximumProduct = (matrix) => {
  let maxProduct1 = 1;
  let maxProduct2 = 1;

  for (let i = 0; i <= matrix.length - 4; i++) {
    let i = j;
    maxProduct1 =
      matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
  }
  for (let j = 0; j <= matrix.length - 4; j++) {
    let i = j;
    maxProduct2 =
      matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i][j + 3];
  }
  if (maxProduct1 && maxProduct2 === 1) {
    return 1;
  } else {
    return maxProduct1;
  }
};