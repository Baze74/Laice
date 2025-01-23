//forloop1

for (let i = 0; i <= 15; i++) {
    console.log(i);
}

//forloop2

const shoes = ["Jordan", "Airforce", "Nike", "Balenciaga", "Surk"];

for (let i = 0; i < shoes.length; i++) {
    console.log(shoes[i]);
}

//whileloop1

let countdown = 3;

while (countdown > 0) {
    console.log(countdown);
    countdown--;
}
console.log("JS is awesome!");

//whileloop2

let X = 0;

while (X <= 10) {
    console.log(X);
    X ++;
}

//dowhileloop1

let i = 5;

do {
    console.log(i);
    i++;
} while (i < 15);

//dowhileloop2

let num = 1;

do {
    console.log(`9 x ${num} = ${9 * num}`);
    num++;
} while (num <= 12);

//function parameter1

const divide = (a, b) => {
    return a / b;
}

console.log(divide(144, 54));

//function parameter2

const substract = (a, b) => {
    return a - b;
}

console.log(substract(15, 20));

//array1

const cars = ["Tesla", "Mercedes", "BMW", "Rolls-Royce", "Lamborghini"];
console.log(cars);

//array2

const phones = ["Samsung", "Apple", "Xiaomi", "Oppo", "Vivo"];
console.log(phones);
