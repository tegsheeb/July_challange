function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
  const args = Array.prototype.slice.call(arguments);
  const unique = {};
  for (let i = 0; i < args.length; i++) {
    if (!unique[args[i]]) {
        unique[args[i]] = 1;
    } else {
        return true;
    }
  }
  return false;
}