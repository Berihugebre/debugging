'use strict';

// disclaimer: this file uses a for ... of loop!
//  you'll see soon enough why this example is included

// you can use a for ... of loop to build an object from array of entries
const menagerieEntries = [
  ['swimming', 'mackerel'],
  ['flying', 'crane'],
  ['running', 'cheetah'],
  ['jumping', 'spider'],
];
console.log(menagerieEntries);

const menagerie = {};
for (let keyValuePair of menagerieEntries) {
  const [key, value] = keyValuePair; // *
  menagerie[key] = value;
}

console.log(menagerie);
const expectedMenagerie = {
  swimming: 'mackerel',
  flying: 'crane',
  running: 'cheetah',
  jumping: 'spider',
};
const isPassing = deepCompare(menagerie, expectedMenagerie);
console.assert(isPassing, 'Test 1');

// * https://www.freecodecamp.org/news/array-and-object-destructuring-in-javascript/

// hoisted to keep it out of your way in the editor
// in one line so it's out of your way in JS Tutor

// prettier-ignore
function deepCompare(actual, expect) { return ( actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect && ((Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))) || (Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every(key => deepCompare(actual[key], expect[key]))))));}
