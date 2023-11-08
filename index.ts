// problem-1 start
const checkSquareOrLength = (param: string | number): number => {
  if (typeof param === "number") {
    return param * param;
  } else {
    return param.length;
  }
};

// const result1 = checkSquareOrLength(2);
// const result2 = checkSquareOrLength(3);
// const result3 = checkSquareOrLength("MD IH Alif");

// console.log({ result1, result2, result3 });

// problem-1 end

// problem-2 start

type Address = {
  city: string;
  street: string;
};

interface Person {
  name: string;
  age: number;
  email: string;
  address?: Address;
  phone?: string;
}

const getAddressCity = (param: Person): string | undefined => {
  return param?.address?.city;
};

const person1: Person = {
  name: "MD IH Alif",
  age: 21,
  email: "xzy@gmail.com",
  address: {
    city: "xzy",
    street: "zyx",
  },
  phone: "01700000000",
};

const person2: Person = {
  name: "MD IH Alif",
  age: 21,
  email: "xzy@gmail.com",
};

const person3: Person = {
  name: "MD IH Alif",
  age: 21,
  email: "xzy@gmail.com",
  address: {
    city: "abc",
    street: "cba",
  },
};

// const personResult1 = getAddressCity(person1);
// const personResult2 = getAddressCity(person2);
// const personResult3 = getAddressCity(person3);

// console.log({ personResult1, personResult2, personResult3 });

// problem-2 end

// problem-3 start
class Cat {
  constructor(
    public name: string,
    public species: string,
    public breed: string
  ) {}
}

const isCat = (param: Cat) => {
  if (param instanceof Cat) {
    return "yes, it's a cat.";
  } else {
    return "no, it's not a cat.";
  }
};

const cat1 = new Cat("Mr. Olos", "Cat", "Deshi");
const cat2 = new Cat("Misty", "Cat", "Deshi");

// const result1 = isCat(cat1);
// const result2 = isCat({ name: "xyz", species: "xyz", breed: "xyz" });
// console.log({ cat1, cat2, result1, result2 });

// problem-3 end

// problem-4 start
type MixedData = (number | string)[];

const sumMixedData = (param: MixedData) => {
  const number = param.filter((item) => typeof item === "number");

  const sum = (number as number[]).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return sum;
};

const mixedData: MixedData = [1, "two", 3, "four", 5];
const mixedData2: MixedData = ["two", "four"];
const mixedData3: MixedData = [1, 2, 3, 4, 5];

const result1 = sumMixedData(mixedData);
const result2 = sumMixedData(mixedData2);
const result3 = sumMixedData(mixedData3);

// console.log({mixedData, mixedData2});

// problem-4 end

// problem-5 start

interface Car {
  make: string;
  model: string;
  year: number;
}

interface Driver {
  name: string;
  licenseNumber: number;
}

const margeCarAndDriver = (car: Car, driver: Driver): Car & Driver => {
  return { ...car, ...driver };
};

const car1: Car = {
  make: "japan",
  model: "xzy",
  year: 2002,
};

const driver1: Driver = {
  name: "MD IH Alif",
  licenseNumber: 2201020183,
};

const car2: Car = {
  make: "india",
  model: "y-0e",
  year: 2001,
};

const driver2: Driver = {
  name: "Alif",
  licenseNumber: 2203020183,
};

const marge1 = margeCarAndDriver(car1, driver1);
const marge2 = margeCarAndDriver(car2, driver2);

// console.log({ marge1, marge2 });

// problem-5 end

// problem-6 start

const sumOfNumbers = (param: unknown): void => {
  if (param instanceof Array) {
    if (param.every((item) => typeof item === "number")) {
      const total = param.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );

      console.log(total);
    } else {
      console.log("please provide an array of numbers");
    }
  } else {
    console.log("please provide an array");
  }
};

// sumOfNumbers([1, 2, 3, 4, 5]);
// sumOfNumbers([1, 2, 3, 4, "a", 5]);
// sumOfNumbers({ name: "Alif" });

// problem-6 end

// problem-7 start

const numbers: number[] = [1, 2, 3, 4, 5, 2];

const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];

const findFirstOccurrence = <T>(array: T[], target: T): number => {
  return array.indexOf(target);
};

const targetNumber = 2;

const targetString = "cherry";

const indexInNumbers = findFirstOccurrence<number>(numbers, targetNumber);

const indexInStrings = findFirstOccurrence<string>(strings, targetString);

const indexInNumbers2 = findFirstOccurrence<number>(numbers, 9);

// console.log(indexInNumbers);

// console.log(indexInStrings);
// console.log(indexInNumbers2);

// problem-7 end

// problem-8 start

interface Product {
  name: string;
  price: number;
  quantity: number;
}

type Cart = Product[];

const totalCost = (products: Cart): number => {
  const subTotal = products.map((item) => item.price * item.quantity);
  const total = subTotal.reduce(
    (finalValue, currentValue) => finalValue + currentValue,
    0
  );

  return total;
};

const product1: Product = {
  name: "Asus Laptop",
  price: 45000,
  quantity: 1,
};

const product2: Product = {
  name: "Oppo phone",
  price: 13000,
  quantity: 3,
};

const product3: Product = {
  name: "iPhone 13",
  price: 100000,
  quantity: 1,
};

const cart: Cart = [product1, product2, product3];
console.log(totalCost(cart));

// problem-8 end
