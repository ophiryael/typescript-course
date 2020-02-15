// const names: Array<string> = []; // string[]
// // names[0].split(' ');

// const promise: Promise<number> = new Promise(resolve => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then(data => {
//   data.split(' ');
// });

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// const mergedObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
//   { name: 'Gandalf', hobbies: ['Sports'] },
//   { age: 2019 }
// );

const mergedObj = merge({ name: 'Gandalf', hobbies: ['Sports'] }, { age: 2019 });
console.log(mergedObj.age);
