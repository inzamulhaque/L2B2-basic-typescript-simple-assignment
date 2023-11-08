// problem-1 start
const checkSquareOrLength = (param: string | number) => {
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
