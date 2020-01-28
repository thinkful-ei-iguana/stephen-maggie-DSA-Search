const HashMap = require('./hashFunction');

function main() {
  let lotr = new HashMap;

  let MAX_LOAD_RATIO = 0.5;
  let SIZE_RATIO = 3;


  lotr.set('Hobbit', 'Bilbo');
  lotr.set('Hobbit', 'Frodo');
  lotr.set('Wizard', 'Gandolf');
  lotr.set('Human', 'Aragorn');
  lotr.set('Elf', 'Legolas');
  lotr.set('Maiar', 'The Necromancer');
  lotr.set('Maiar', 'Sauron');
  lotr.set('RingBearer', 'Gollum');
  lotr.set('LadyOfLight', 'Galadriel');
  lotr.set('HalfElven', 'Arwen');
  lotr.set('Ent', 'Treebeard');

  // console.log(lotr.get('Maiar'));
  // console.log(lotr.get('Hobbit'));
  // console.log('Capacity is ', lotr._capacity);
  // console.log('hashtable', lotr._hashTable);
  // console.log(lotr);
}
// console.log(main());

// 1. Print your hash map and notice the length and items that are hashed in your hash map. Have you hashed all the items you were asked to?
// -No, not all items seem to have hashed
// - The retrieved values of Maiar and Hobbit are Sauron and Frodo. This is the result of a collision caused by there being two Hobbit and two Maiar keys.
// Capacity is 24 - capacity begins at 8,but once the 4th index is filled (.5 max load ratio), the capacity is tripled (size ratio of 3); 8*3=24

// 2. What does this do?

const WhatDoesThisDo = function () {
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};
// console.log(WhatDoesThisDo());

// This function hashes items to map1 and map2. The keys (str1 and str2) are identical and will cause collisions if set to the same map. For both map1 and map2, two items are hashed and the keys in all cases are identical, and so the last value to be hashed will be the one that is called with the get method- 20 and 10.

// 3. Demonstrate understanding of hash maps

// open addressing: [22, 88, empty, empty, 4, 15, 28, 17, 59, 31, 10]

// separate chaining: 
// [ ↓ , 20, 12 , 5 , ↓ , 17]
//   28               15
//   ↓                ↓
//   19               33   
//   ↓
//   10
//

// 5. Any permutation of a palindrome
// correct solution below:
function isItAPalindrome(string) {

  const unpaired = new HashMap();
  for (let character of string) {
    if (unpaired.has(character)) {
      unpaired.delete(character);
    } else {
      unpaired.set(character, true);
    }
  }
  return unpaired.size <= 1;

}
isItAPalindrome('done');
// 7. Separate Chaining


