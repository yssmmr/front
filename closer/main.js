//クロージャー（動的な関数生成）
function addNumberFactory(num) {
  function addNumber (value) {
      return num + value;
  }
  return addNumber;
}

const add5 = addNumberFactory(5);
const add10 = addNumberFactory(10);
const result = add10(10);
console.log(result);