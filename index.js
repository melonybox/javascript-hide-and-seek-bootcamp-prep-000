function getFirstSelector(selector) {
  var foundItem = document.querySelector(selector)
  return foundItem
}

function nestedTarget() {
  var foundItem = document.querySelector('#nested .target')
  return foundItem
}

function deepestChild() {
  var foundItem = document.querySelectorAll('#grand-node div')
  var foundItemA = foundItem[foundItem.length-1]
  return foundItemA
}

function increaseRankBy(n) {
  var foundItem = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < foundItem.length; i++) {
    foundItem[i].innerHTML = parseInt(foundItem[i].innerHTML)+n
  }
  return foundItem
}