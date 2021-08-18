function onlyEven(array) {
  // your code here
  return array.filter((input) => {
    return input % 2 == 0
  })
}

function onlyOneWord(array) {
  // your code here
  return array.filter((input) => {
    return input.includes(' ') == false
  })
}

function positiveRowsOnly(array) {
  // your code here
  return array.filter((input) => {
    return input.every((innerPut) => {
      return innerPut > 0
    })
  })
}

function allSameVowels(array) {
  // your code here
  return array.filter((input) => {
    let firstVowel = ''
    for (let i = 0; i < input.length; i++) {
      // console.log(stringInput[i])
      if (isVowel(input[i]) == true) {
        // console.log(`this vowel ${stringInput[i]}`)
        if (firstVowel == '') {
          firstVowel = input[i]
        }
        if (input[i] != firstVowel) {
          // console.log('its false')
          return
        }
      }
    }
    return input
  })
}

function everySameVowels(input) {
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
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
}
