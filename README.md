
# Basic Problem Solving Assignment Using TypeScript

In this assignment, I have solved 8 basic problems using typescript, and here some interview questions that are a part of assignment.



## 1. What are some benefits of using TypeScript over JavaScript in a project?

* TypeScript adds type on JavaScript code. 
* Using typescript be more than javascript code readable and understandable.
* Bugs or errors are more likely to be found during the development phase using TypeScript code than JavaScript code.
* TypeScript type checking is stronger than JavaScript type checking.
* TypeScript finds more bugs or errors compared to JavaScript on compile time and for this reason, TypeScript App is less than crush compared to JavaScript App.


There are also many benefits to using TypeScript.

## 2. What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each

Optional chaining(?) and Nullish(??) coalescing operators are two valuable operators in TypeScript. They are handle undefine and null values and make code safer and error free.

Optional chaining(?):  
Optional Chaining handles undefined and null values when we are accessing  object property. when we access any object property and the property value is undefined or null then optional chaining handles the error and returns the undefined value.

```
type User = {
  name: string;
  email?: string;
};

const user: User = {
  name: "xyz",
};

const email = user?.email;
console.log(email); // undefine


```

Nullish Coalescing (??):  
Nullish Coalescing handles undefined and null values when we are accessing object property. when we access any object property and the property value is undefined or null then nullish coalescing handles the error and set the default value.

```
type User = {
  name: string;
  age?: number;
};

const user: User = {
  name: "xyz",
};

const age = user.age ?? 11;
console.log(age); // 11
```

## 3. How do you handle asynchronous operations in TypeScript, and what are the advantages of using async/await over callbacks or Promises?

There are ways to handle asynchronous operations on Typescript: callback, promise, and async/await.

callback: callback is a function that's passed another function as an argument and argument function finish the  executing. 

promise: promise is an object and means a request completion or failure.

async/await: async/await is a newer syntax that is built on top of promises and provides a more easy way to handle asynchronous operations.  


Advantages of using async/await over callbacks or Promises:  
async/await code is more easy to understand than callback or promise code. async/await code is more readable than callback or promise. async/await code like synchronous code and error handle is easier than callback or promise. In async/await code we are use try catch block for handling error.  


## 4. How can you use TypeScript's enums, and what are their advantages?

TypeScript enum are keyword that can be used to present same type variables.  
use TypeScript's enums: To use TypeScript enum you need to define enum first. Like:  
```
enum Role {
  ADMIN,
  MANAGER,
  USER,
}
```
Then use TypeScript enum.
```
console.log(Role.ADMIN);
```   

Advantages of enum: enums make our code more readable, maintainable and safe also. It's made easier to understand code.


## 5. Explain the role of type guards in TypeScript and provide an example of a custom type guard.

Type guards play a very important role in TypeScript. It allows to check the type of variable at runtime. validate user input and ensure input type is correct using type guards. using type guards we can perform conditional logic based on variable type. type guards make our code more readable and maintainable.

example of a custom type guard:  
```
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
```

## 6. Can you give an example of how to use "readonly" properties in TypeScript?

We are using readonly property for creating an immutability variable. This type of variable we are using for immutable value and never changing value. we are make readonly variable for reduce accidentally changing value.  

example:  
```
type Account = {
    readonly accountNo: number;
    name: string;
}

const account : Account = {
    accountNo: 110055221,
    name: "xyz"
}

account.accountNo = 35672782 // error
```

## 7. Explain what a union type is in TypeScript and provide an example of its usage.

A union type in TypeScript is a type that allows to storage of two or more type values in a single variable. we are create union type with pipe(|). we use union type variable for creating reusable or flexible variables. we also use union type to validate user input.  

example:
```
type User = {
  name: string;
  emailOrPhoneNo: string | number;
};

const user :User ={
    name:"XYZ",
    emailOrPhoneNo: "xyz@gmail.com"
}

```