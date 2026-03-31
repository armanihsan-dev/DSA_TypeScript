function addLogging(origionalFunction: Function) {
  return function () {
    console.log(`LOG: ${origionalFunction.name} was called`);
    return origionalFunction();
  };
}

function sayHello() {
  console.log('Hello, World!');
}
function sayGoodBye() {
  console.log('Goodbye, World!');
}

const safeHello = addLogging(sayHello);
const safeGoodBye = addLogging(sayGoodBye);
safeGoodBye();
