// Check to see if any of the elements in the
// array are numbers greater than 10.

function anyGreaterThan10(input) {
  return input.some(function greater10(innerInput) {
    return innerInput > 10
  })
}

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord(input) {
  return input.some(function aLongWord(newInput) {
    return newInput.length > 10
  })
}

// Check to see if any of the elements in
// the matrix are true.

function truePossibilities(input) {
  return input.some(function matrixChecker(matrixInput) {
    return matrixInput.includes(true)
  })
}

// Check to see if 'Lost' is in
// the phrase (using some).

function lostCarcosa(input) {
  return input.some(function findSome(stringInput) {
    return stringInput.includes('Lost')
  })
}

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa
}
