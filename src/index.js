module.exports =  function check(str, bracketsConfig) {
  if (str.length % 2) {return false};
  let brackets = [];
  for (n of bracketsConfig) {
    brackets.push(n[0] + n[1]);
  }

  while (true) {
    let start = str.length;
    brackets.forEach(pair => {str = str.split(pair).join('')})
    if (start == str.length) break;
  }
  return str.length ? false : true;
}
