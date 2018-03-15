function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;
  array.forEach((item) => {

    if (Array.isArray(item)) {
     sum += sumItems(item);
    } else {
      sum  += item;
  
    }
  });
  return sum;
}
let array =[[1, 2, [[3], 4]], 5, []];
console.log(sumItems(array));
module.exports = sumItems;