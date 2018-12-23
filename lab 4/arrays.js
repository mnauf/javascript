var city=["Hello","How","Are","you","Doing?"];
console.log(city.length); 
console.log(city);

console.log(" ");
city.pop(); // Queue - Removing from the last place
console.log(city.length); 
console.log(city);

console.log(" ");
city.push("hey"); // Stack - adding in the last place
console.log(city.length);
console.log(city);

console.log(" ");
city.shift();   // Queue - Removing from the first place
console.log(city.length);
console.log(city);

console.log(" ");
city.unshift("Hahhaha"); // Queue - adding in the first place
console.log(city.length);
console.log(city);

console.log(" ");
city.splice(2,3,"first element added","Second element added");
console.log(city.length);
console.log(city);

console.log(" ");
city= city.slice(2,4); // 2 is inclusive and 3 is exclusive
console.log(city.length);
console.log(city);
// lower bound 0
// upper bound N-1