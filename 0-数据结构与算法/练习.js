function flatten(arr){
  arr = arr.toString().split(',').map(item=>item*1)
  return arr
}
var arr = [1,2,3,[4,5,6,[7,8,9]]]
console.log(flatten(arr))