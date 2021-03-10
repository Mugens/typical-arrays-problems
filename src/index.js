
exports.min = function min (array) {
  let arr = 0;
  if(array && array.length>0){
    arr = array.reduce((accum, curent)=>accum<curent ? accum : curent);
  }
  return arr;
}

exports.max = function max (array) {
  let arr = 0;
  if(array && array.length>0){
    arr = array.reduce((accum, curent)=>accum>curent ? accum : curent);
  }
  return arr;
}

exports.avg = function avg (array) {
  let arr = 0;
  if(array && array.length>0){
    arr = array.reduce((accum, curent)=>accum+curent);
    arr= arr/array.length;
  }
  return arr;
}
