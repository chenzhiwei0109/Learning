function quickSort(arr){
  if(arr.length<=1) return arr;
  var pivotIndex = Math.floor(arr.length/2);
  var pivot = arr.splice(pivotIndex,1)[0];
  var left = [],right =[];
  for(var i=0;i<arr.length;i++){
    if(arr[i]<pivot){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return [...quickSort(left),pivot,...quickSort(right)]
}
console.log(quickSort([1, 3, 7, 4, 9, 7, 5]))