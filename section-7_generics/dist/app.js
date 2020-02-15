"use strict";
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
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
// const mergedObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
//   { name: 'Gandalf', hobbies: ['Sports'] },
//   { age: 2019 }
// );
const mergedObj = merge({ name: 'Gandalf', hobbies: ['Sports'] }, { age: 2019 });
console.log(mergedObj);
function countAndDescribe(element) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(['Sports', 'Cooking']));
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'Ron' }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Ron');
textStorage.addItem('Harry');
textStorage.removeItem('Ron');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ['Ron', 'Harry'];
// names.push('Neo');
//# sourceMappingURL=app.js.map