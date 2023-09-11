const hello = (name, age) =>{
  console.log('hello' + name + age);
  console.log('hello' + name + age);
}


hello('Code Mafia, 10');
hello('Code Mafia, 20');


const arry = [1,2,3,4,5,6];
arry.forEach(value => console.log(value));


//コールバック関数

function hello2(callback) {
  console.log(callback);
  console.log('hello' + callback());
}


function getName() {
  return 'Code Mafia';
}

const getFirstName = function() {
  return 'Code';
}


hello2(getFirstName);
