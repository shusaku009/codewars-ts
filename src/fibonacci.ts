function fibonacci(a: number, b: number): number {
  const array = [a, b];
  for (let i = 0; i < 10; i++) {
    array.push(array[array.length - 1] + array[array.length - 2]);
  }
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result = array[i];
  }
  return result;
}

console.log(fibonacci(0, 1));

function fibonacciClaude(): () => number {
  let a = 0;
  let b = 1;

  return function(): number {
    [a, b] = [b, a + b];
    return a;
  };
}

const f = fibonacciClaude();
for (let i = 0; i < 10; i++) {
  console.log(f());
}
