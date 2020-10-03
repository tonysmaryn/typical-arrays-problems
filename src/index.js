
exports.min = function min (array) {
  if (typeof(array) !== 'object' || array.length === 0 ){
    return 0;
  }
  let min = array[0];
  for (let i = 1; i < array.length; i++){
    if (min > array[i]){
      min = array[i];
    }
  }
  return min;
}

exports.max = function max (array) {
  if (typeof(array) !== 'object' || array.length === 0 ){
    return 0;
  }
  let max = array[0];
  for (let i = 1; i < array.length; i++){
    if (max < array[i]){
      max = array[i];
    }
  }
  return max;
}

exports.avg = function avg (array) {
  if (typeof(array) !== 'object' || array.length === 0 ){
    return 0;
  }
  let sum = 0;
  let i = 0;
  for (i; i < array.length; i++){
    sum += array[i];
  }
  return sum/i;
}
