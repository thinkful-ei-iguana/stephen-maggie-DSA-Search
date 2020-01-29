function binarySearch(array, value, start, end) {
  let beginning = start === undefined ? 0 : start;
  let arrEnd = end === undefined ? array.length : end;

  if (beginning > arrEnd) {
    return -1;
  }

  const index = Math.floor((beginning + arrEnd) / 2);
  const item = array[index];

  console.log(beginning, arrEnd);

  if (item === value) {
    return index;
  }
  else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

////////////////////////////

function _printArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function howManySearches(array, value, start, end) {
  let beginning = start === undefined ? 0 : start;
  let arrEnd = end === undefined ? array.length : end;

  if (beginning > arrEnd) {
    return 'number not found';
  }

  const index = Math.floor((beginning + arrEnd) / 2);
  const item = array[index];
  // console.log(beginning, arrEnd);
  console.log(_printArray(array));


  if (item === value) {
    return `Found item: ${item}`;
  }
  else if (item < value) {
    return howManySearches(array, value, index + 1, end);
  }
  else if (item > value) {

    return howManySearches(array, value, start, index - 1);
  }

}
let sortedList = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];

// console.log(howManySearches(sortedList, 8));
console.log(howManySearches(sortedList, 16));
