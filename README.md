
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