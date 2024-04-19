// question 1
let arr = [1,2,3,4,5,6];

arr.map((Number) => {
    return Number*Number;
});

// question 2
let score = 56;
function calculateGrade(score) {
    return score >= 90 ? 'A' :
           score >= 80 ? 'B' :
           score >= 70 ? 'C' :
           score >= 60 ? 'D' : 'F';
}

// question 3
let car = {
    companyName: 'Toyota',
    model: 'Camry',
    year: 2022
};

function changeCarYear(carObj, newYear) {
    carObj.year = newYear;
}

changeCarYear(car, 2023);

let { model, year } = car;
console.log(`Model: ${model}, Year: ${year}`);

// question 4
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function filterPrimes(numbers) {
    return numbers.filter(num => isPrime(num));
}

let numbersArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let primeNumbersArray = filterPrimes(numbersArray);

console.log(primeNumbersArray); 

// question 5

// Map Function:
// Transforming array elements
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

// Generating a new array
const users = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }];
const userNames = users.map(user => user.name); // ['Alice', 'Bob']

// Filter Function:
// Filtering prime numbers
const n = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const primeNumbers = n.filter(num => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}); // [2, 3, 5, 7]

// Filtering objects
const products = [{ name: 'Apple', price: 1.99 }, { name: 'Banana', price: 0.99 }];
const affordableProducts = products.filter(product => product.price < 1.5);

// reduce function:
// Aggregating values (sum)
const t = [1, 2, 3, 4, 5];
const sum = t.reduce((acc, curr) => acc + curr, 0); // 15

// Data transformation
const items = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
const itemMap = items.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
}, {}); // {1: { id: 1, name: 'Item 1' }, 2: { id: 2, name: 'Item 2' }}


// question 6
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchData();

// question 7
let person = {
    name: 'John Doe',
    address: {
        city: 'New York',
        country: 'USA'
    }
   
};

const phoneNumber = person?.contact?.phone;

console.log(phoneNumber); 


