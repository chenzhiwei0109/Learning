// 从第二个数往前比，比他大的往后
function insertSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    for (var j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      } else {
        break
      }
    }
  }
  return arr
}