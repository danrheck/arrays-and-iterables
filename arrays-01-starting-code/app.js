const numbers = [1, 2, 3];
console.log(numbers);

// const moreNumbers = Array(5);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const hobbies = ['Cooking', 'Sports'];
console.log(hobbies);

const personalData = [30, 'Max', {moreDetail: []}];
console.log(personalData);

const analyticsData = [[1, 1.6], [-5.4, 2.1]];
console.log(analyticsData);

for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
};

console.log(personalData[1]);