let A = [50, 107, "jack", 83, "killer", "son", true]

// No. 1 Answer
let striFilter = A.filter(arrayFilter => typeof arrayFilter === "string");
console.log(striFilter);

// No. 2 Answer
let numFilter = A.filter(arrayFilter => typeof arrayFilter === "number");
console.log(numFilter);

// No. 3 Answer
let reversed = striFilter.reverse();
console.log('reversed:', reversed);

// No. 4 Answer
let add = striFilter.concat(numFilter)
console.log(add);

// No. 5 Answer
console.log(add.splice(-6, 3));

// No. 6 Answer
let filt = A.filter((x) => x < 100)
console.log(filt);

// No. 7 Answer
let remoadd = striFilter.map((pera) => "str" + pera.slice(0, -1))
console.log(remoadd);