let list = {
  USER_EMAIL: 100,
  USER_WECHART: 101,
  USER_MOBILE: 102,
  eachObj
}
function eachObj(val) {
  for(let key in this) {
    if(this[key] == val) {
      return true
    }
    return false
  }
}

module.exports = {
  list
}