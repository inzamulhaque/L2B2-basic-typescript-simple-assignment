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

const result1 = isCat(cat1);
const result2 = isCat({ name: "xyz", species: "xyz", breed: "xyz" });
console.log({ cat1, cat2, result1, result2 });

// problem-3 end

// const result = xyz("xzy")
// console.log(result);
