/*
let reducedArray = array.reduce((returnedValue, CurrentValue) => {
  returned value is the value that is returned to the function, starts as index 0
  current value is the value the loop is on, starts as index 1
  return becomes the returned value of the next loop fo the reduce
}, If you want to set initial return value and set the index 0 as the current value)
*/

function sum(array) {
  return array.reduce((returned, current) => {
    return returned + current
  })
  // your code here
}

function productAll(array) {
  return array.reduce((returned, current) => {
    return (
      returned *
      current.reduce((returned2, current2) => {
        return returned2 * current2
      }, 1)
    )
  }, 1)
  // your code here
}

function objectify(array) {
  return array.reduce((returned, current) => {
    //let firstObj1 = {[returned[0]]:returned[1]}
    // console.log({ [current[0]]: current[1] })
    return { [current[0]]: current[1], ...returned }
  }, {})
  // your code here
}

function luckyNumbers(array) {
  // your code here
  return (
    'Your lucky numbers are: ' +
    array.reduce((returned, current) => {
      let currentString = ''
      if (array.indexOf(current) == array.length - 1) {
        currentString = ', and ' + current
      } else {
        currentString = ', ' + current
      }
      return returned + currentString
    })
  )
}

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
}
