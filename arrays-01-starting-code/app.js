// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = Array(5);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// console.log(hobbies);

// const personalData = [30, 'Max', {moreDetail: []}];
// console.log(personalData);

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];
// console.log(analyticsData);

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// };

// console.log(personalData[1]);


// const hobbies = ['Sports','Cooking'];
// hobbies.push('Reading');  //adds new element to end of array
// hobbies.unshift('Coding');  //adds new element to beginning of array
// hobbies.pop();  //removes last element of array
// hobbies.shift();  //removes first element of array
// console.log(hobbies);

// hobbies[1] = 'Coding';  //replace an element
// //hobbies[5] = 'Reading';
// console.log(hobbies);

// hobbies.splice(1, 0, 'Reading', 'Good Food');
// console.log(hobbies);

// const removedElements = hobbies.splice(-2, 1);  //use negative indexes to remove elements from the right
// console.log(hobbies);

//const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
//const storedResults = testResults.slice(-3);  //create a copy of the array with slice(). Use element indexes to copy a range

// const storedResults = testResults.concat([14, 22.1]); //combine array data with existing array, a new array is created

// testResults.push(5.91);

// console.log(storedResults, testResults);
// console.log(testResults.indexOf(1.5));

// console.log(testResults.includes(10.99));

// const personData = [{name: 'Max'}, {name: 'Dan'}];
// console.log(personData.indexOf({name: 'Dan'}));

// const dan = personData.find((person, idx, persons) => {
//   return person.name === 'Dan'
// });

// dan.name = 'John';

// console.log(dan, personData);

// const danIndex = personData.findIndex((person, idx, persons) => {
//   return person.name === 'Dan'
// });

// console.log(danIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //   taxAdjustedPrices.push(price * (1 + tax));
// // };

// prices.forEach((price, idx, prices) => {
//   const priceObj = {index: idx, taxAdjPrice: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//   const priceObj = {index: idx, taxAdjPrice: price * (1 + tax) };
//   return priceObj;
// });

// //console.log(prices, taxAdjustedPrices);

// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return 1;
//   }
// });
// //console.log(sortedPrices.reverse());
// console.log(sortedPrices);

// const filteredArray = prices.filter(price => price > 6);

// console.log(filteredArray);

// // let sum = 0;
// // prices.forEach((price) => {
// //   sum += price;
// // });

// // console.log(sum);

// const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

// console.log(sum);

// const data = 'new york;10.99;2000';

// const transformedData = data.split(';');
// transformedData[1] = + transformedData[1];
// console.log(transformedData);

// const nameFragments = ['Dan', 'Heck'];
// const name = nameFragments.join(' ');
// console.log(name);

// const copiedNameFragments = [...nameFragments];
// nameFragments.push('Mr');
// console.log(nameFragments, copiedNameFragments);

// console.log(Math.min(...prices));

// const persons = [{name: 'Dan', age: 30}, {name: 'Max',age: 40}];
// const copiedPersons = persons.map(person => ({ name: person.name, age: person.age }));

// persons.push({name: 'Anna', age: 28});
// persons[0].age = 50;

// console.log(persons, copiedPersons);

const nameData = ['Dan', 'Heck', 'Mr', 30];
// const firstName = nameData[0];
// const lastName = nameData[1];

const [ firstName, lastName, ...otherInformation ] = nameData;
console.log(firstName, lastName, otherInformation);


