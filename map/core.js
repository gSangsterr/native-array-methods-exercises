function multiplyBy10(array) {
  // your code here
  return array.map((input) => {
    return input * 10
  })
}

function shiftRight(array) {
  // your code here
  return array.map((input) => {
    if (array.indexOf(input) == 0) {
      return (input = array[array.length - 1])
    }
    return (input = array[array.indexOf(input) - 1])
  })
}

function onlyVowels(array) {
  // your code here
  return array.map((input) => {
    let vowelString = ''
    for (chars in input) {
      if (isVowel(input[chars])) {
        // console.log(`the vowel si ${input[chars]}`)
        vowelString = vowelString + input[chars]
      }
    }
    //console.log(vowelString)
    return vowelString
  })
}

function doubleMatrix(array) {
  // your code here
  return array.map((input) => {
    return input.map((innerPut) => {
      return innerPut * 2
    })
  })
}

function isVowel(inputChar) {
  let vowelArr = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
  return vowelArr.some((element) => inputChar.includes(element))
}

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
}
