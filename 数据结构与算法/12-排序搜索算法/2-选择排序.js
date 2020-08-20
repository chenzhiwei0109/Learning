/* 
把第i小的数放到第i项
 */

function selectitonSort(arr){
  var minIndex =0;
  for(var i=0;i<arr.length-1;i++){
    minIndex = i;
    for(var j=i;j<arr.length-1;j++){
      if(arr[j]<arr[minIndex]){
        minIndex = j
      }
    }
    [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]];

    
  }
}