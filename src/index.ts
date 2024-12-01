// CodeWars Multiples of 3 or 5
function solution(number: number): number {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

// CodeWars Break camelCase
function breakCamelCase(string: string): string {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    // 大文字があるか判定
    if (string[i] >= "A" && string[i] <= "Z") {
      // 大文字がある場合の処理
      result += " " + string[i];
    } else {
      // 大文字が無い場合の処理
      result += string[i];
    }
  }
  return result;
}
breakCamelCase("testCase");

// CodeWars Bit Counting
function bitCounting(n: number): number {
  if (n) {
    return n.toString(2).match(/1/g)?.length ?? 0;
  }
  return 0;
}
bitCounting(2);

// Replace With Alphabet Position
function alphabetPosition(text: string): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return text
    .toLowerCase()
    .split("")
    .filter((char) => alphabet.includes(char))
    .map((char) => alphabet.indexOf(char) + 1)
    .join(" ");
}

// Friend or Foe?
function friend(friends: string[]): string[] {
  return friends.filter((f) => f.length === 4);
}

console.log(friend(["test", "te", "user"]));

// RGB To Hex Conversion
function rgb(r: number, g: number, b: number): string {
  const toHex = (n: number): string => {
    if (n <= 0) {
      return "00";
    }

    if (n > 255) {
      return "FF";
    }
    return n.toString(16).padStart(2, "0").toUpperCase();
  };
  return toHex(r) + toHex(g) + toHex(b);
}

console.log(rgb(-25, 255, 255));

const i = -25;
console.log(i.toString(16));

function arrayDiff(a: number, b: number): number[] {
  const sum = [a * 2, b * 2];
  return sum;
}

console.log(arrayDiff(2, 5));

// Make the Deadfish swim
export function parse(data: string): number[] {
  const array: number[] = [];
  let v = 0;

  for (let i = 0, l = data.length; i < l; i++) {
    switch (data.charAt(i)) {
      case "i":
        v++;
        break;
      case "d":
        v--;
        console.log(v);
        break;
      case "s":
        v *= v;
        break;
      case "o":
        array.push(v);
        break;
    }
  }
  return array;
}

console.log(parse("iiisdoso"));

// Unique In Order
export function uniqueInOrder<T extends string | number>(
  iterable: string | T[],
): T[] {
  const array: T[] = [];
  for (let i = 0; i < iterable.length; i++) {
    const currentElement = iterable[i];
    const prevElement = iterable[i - 1];
    if (currentElement !== prevElement) {
      array.push(currentElement as T);
    }
  }
  return array;
}

console.log(uniqueInOrder("aabbbggfi"));

// Playing with digits
export const digPow = (n: number, p: number): number => {
  const nArr = n.toString().split("");
  let sum = 0;

  for (let i = 0; i < nArr.length; i++) {
    const element = Number.parseInt(nArr[i]);
    sum += element ** p;
    p++;
  }
  const compare = sum / n;
  if (Number.isInteger(compare)) {
    return compare;
  } else {
    return -1;
  }
};

console.log(digPow(46288, 3));

// Counting sheep...
export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
  const trueCount = arrayOfSheep.filter((boolean) => {
    return boolean === true;
  });
  return trueCount.length;
}

export function refactorCountSheeps(
  arrayOfSheep: (boolean | undefined | null)[],
) {
  return arrayOfSheep.filter(Boolean).length;
}

console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ]),
);

// Reversed Words
export function reverseWords(str: string): string {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseWords("test word"));

// Is it even?
export const testEven = (n: number): boolean => {
  return n % 2 === 0;
};

console.log(testEven(2));

// Find the number of trailing zeros in the binary representation of a number.
export function trailingZeros(n: number): number {
  const binaryNum = n.toString(2);
  const lastNum = binaryNum.split("").reverse();
  let count = 0;
  for (let i = 0; i < lastNum.length; i++) {
    if (lastNum[i] === "0") {
      count += 1;
    } else {
      break;
    }
  }
  return count;
}

console.log(trailingZeros(4));
console.log(trailingZeros(5));
console.log(trailingZeros(8));

// The wheat/rice and chessboard problem
export function squaresNeeded(grains: number) {
  let s = 0;

  while (2 ** s - 1 < grains) {
    s++;
  }

  return s;
}

console.log(squaresNeeded(5));

// Rock Paper Scissors
export function rps(p1: string, p2: string): string {
  if (p1 === p2) {
    return "Draw!";
  }
  if (p1 === "rock" && p2 === "scissors") {
    return "Player 1 won!";
  } else if (p1 === "paper" && p2 === "rock") {
    return "Player 1 won!";
  } else if (p1 === "scissors" && p2 === "paper") {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
}

console.log(rps("rock", "paper"));

// Vowel Count
export class Kata {
  static getCount(str: string): number {
    return str
      .toLowerCase()
      .split("")
      .filter((c) => "aeiou".includes(c)).length;
  }
}

console.log(Kata.getCount("testeven"));

// Vowel Count ver2
export class Kata2 {
  static getCount(str: string) {
    return [...str].filter((char) => "aeiou".includes(char)).length;
  }
}

// V A P O R C O D E
export function vaporcode(str: string): string[] {
  const upperText = str.toUpperCase().split("");
  return upperText;
}

console.log(vaporcode("text"));

// Beginner - Reduce but Grow
export function grow(arr: number[]): number {
  const byWithInitial = arr.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
  );
  return byWithInitial;
}

console.log(grow([1, 2, 3, 4, 5]));

// Square Every Digit
const squareDigits = (num: number): number => {
  const digits = num.toString().split("");
  const squaredDigits = digits.map((n) => Number.parseInt(n) ** 2);
  console.log(squaredDigits);
  const squaredNumber = squaredDigits.join("");

  return +squaredNumber;
};

console.log(squareDigits(12345));

// Count the divisors of a number
export function divisors(n: number) {
  const result = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      result.push(i);
      if (i !== n / i) {
        result.push(n / i);
      }
    }
  }
  return result.sort((a, b) => a - b).length;
}

console.log(divisors(3));

// Longest vowel chain
export function solve(s: string): number {
  const count = [...s.matchAll(/[aeiou]+/g)].reduce(
    (acc, [match]) => Math.max(acc, match.length),
    0,
  );

  return count;
}

console.log(solve("chrononhotonthuooaos"));

// Calculate BMI
export function bmi(weight: number, height: number): string {
  // TODO: implement this method
  const calculation = weight / height ** 2;
  if (calculation <= 18.5) {
    return "Underweight";
  } else if (calculation <= 25.0) {
    return "Normal";
  } else if (calculation <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
  // throw new Error("The method or operation is not implemented.");
}

// Holiday VI - Shark Pontoon
function shark(
  pontoonDistance: number,
  sharkDistance: number,
  youSpeed: number,
  sharkSpeed: number,
  dolphin: number,
): string {
  const actualSharkSpeed: number = dolphin ? sharkSpeed / 2 : sharkSpeed;
  return pontoonDistance / youSpeed < sharkDistance / actualSharkSpeed
    ? "Alive!"
    : "Shark Bait!";
}

console.log(shark(40, 50, 30, 10, 50));

// Will there be enough space?
export function enough(cap: number, on: number, wait: number): number {
  const availableSpace = cap - on;
  return Math.max(0, wait - availableSpace);
}

console.log(enough(50, 15, 10));
console.log(enough(100, 60, 50));

// You Can't Code Under Pressure #1
export function doubleInteger(i: number): number {
  return i * 2;
}

// Grasshopper - Summation
export const summation = (num: number) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

console.log(summation(1));
console.log(summation(8));

// Sum without highest and lowest number
export function sumArray(array: number[] | null): number {
  if (!array || array.length <= 2) {
    return 0; // 配列がnullまたは要素が2以下の場合は0を返す
  }
  const maximum: number = array.reduce((max, current) =>
    Math.max(max, current),
  );
  const minimum: number = array.reduce((min, current) =>
    Math.min(min, current),
  );

  const sum = array
    .filter((num) => num !== maximum && num !== minimum)
    .reduce((acc, curr) => acc + curr, 0);

  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));
