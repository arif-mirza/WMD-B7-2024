// exerise 13.3
// Async await functionality

var counter = 0;

const func1 = (num) => {
  return new Promise(([reject, resolve]) => {
    setTimeout(() => {
      counter++;
      resolve(counter, argu1);
    }, 1000);
  });
};

let func2 = async (value) => {
  console.log("counter => ", counter);
  console.log("value  =>", value);

  let returnValue = await func1(value);
};

for (let i = 0; i < 10; i++) {
  func2(i);
}
