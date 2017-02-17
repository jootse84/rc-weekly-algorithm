const countingSort = (input) => {
  /***
   * from https://en.wikipedia.org/wiki/Counting_sort
   * variables:
   *    input -- the array of items to be sorted; key(x) returns the key for item x
   *    n -- the length of the input
   *    k -- a number such that all keys are in the range 0..k-1
   *    count -- an array of numbers, with indexes 0..k-1, initially all zero
   *    output -- an array of items, with indexes 0..n-1
   *    x -- an individual input item, used within the algorithm
   *    total, oldCount, i -- numbers used within the algorithm
   ***/

  var n = input.length
  var k = Math.max.apply(null, input) + 1
  var count = Array(k).fill().map((_, i) => 0)
  var output = Array(n)
  var total = 0

  // calculate the histogram of key frequencies
  for (var value of input) {
    count[value] += 1
  }

  // calculate the starting index for each key
  // so count[input[val]] will return the index of the position it
  // should store the value in the result - output 
  for (var i of Array(k).fill().map((_, i) => i)) {
    // i = 0, 1, ... k-1
    var oldCount = count[i]
    count[i] = total
    total += oldCount
  }

  // copy to output array, preserving order of inputs with equal keys
  // NOTE: for this case we save keys instead of value!!!
  for (var key of input.keys()) {
    output[count[input[key]]] = key
    count[input[key]] += 1
  }

  return output
}

const radixSort = (input) => {
  var max = Math.max.apply(null, input.map((x) => x.toString().length))

  for (var i of Array(max).fill().map((_, i) => i)) {
    var output = Array(input.length)
    var partition = input.map((x) => x.toString().length > i ? parseInt(String(x % Math.pow(10, i + 1)).charAt(0)) : 0)

    countingSort(partition).forEach((elem, index) => {
      output[index] = input[elem]
    })
    input = output
    console.log(`wave${i} `, input)
  }
  return input
}

input = [4, 1016, 401, 189, 4]
console.log('input: ', input)
console.log('output: ', radixSort(input))
