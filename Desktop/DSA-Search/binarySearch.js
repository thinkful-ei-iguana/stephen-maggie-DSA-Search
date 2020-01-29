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

