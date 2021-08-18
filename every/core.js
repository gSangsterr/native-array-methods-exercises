// Check to see if all elements in an array
// are even numbers.

function allEven(input) {
  return input.every(function isEven(num) {
    return num % 2 == 0
  })
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {
  var l = typeof input
  return input.every(function checkType(arr) {
    if (typeof arr == typeof input[0]) {
      return true
    }
  })
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {
  return input.every(function isAPositive(arrInput) {
    return arrInput.every(function valueIsPositive(value) {
      return value > 0
    })
  })
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels(input) {
  return input.every(function isSameVowel(stringInput) {
    let firstVowel = ''
    for (let i = 0; i < stringInput.length; i++) {
      // console.log(stringInput[i])
      if (isVowel(stringInput[i]) == true) {
        // console.log(`this vowel ${stringInput[i]}`)
        if (firstVowel == '') {
          firstVowel = stringInput[i]
        }
        if (stringInput[i] != firstVowel) {
          // console.log('its false')
          return false
        }
      }
    }
    return true
  })
}
function isVowel(inputChar) {
  let vowelArr = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
  return vowelArr.some((element) => inputChar.includes(element))
}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
}
