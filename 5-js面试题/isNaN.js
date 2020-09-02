function _isNaN(val) {
  let res = Number(val);
  return !(res === res)
}
// NaN === NaN //false
console.log(_isNaN(1))