var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  // appends a kitten to the end of the kittens array
    return kittens.push(name)
}

// prepends a kitten to the beginning of the kittens array
function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

// removes the last kitten from the kittens array
function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

// removes the First kitten from the kittens array
function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

// appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
function appendKitten(name) {
  var arr = [name]
  var newArray = kittens.concat(arr)
  // var newArray = [...kittens, name]
  return  newArray
}

// prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
function prependKitten(name) {
  var newArray = [name, ...kittens]
  return newArray
}

// removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged
function removeLastKitten() {
  return kittens.slice(0,kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
