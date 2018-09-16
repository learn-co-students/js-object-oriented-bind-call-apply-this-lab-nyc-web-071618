//Your code here
function justInvoke(func) {
  return func()
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg)
}

function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, args);
}

function returnNewFunctionOf(fn, thisValue) {
  return fn.bind(thisValue)

}