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
  let result = '';
  for (let i = 0; i < string.length; i++) {
    // 大文字があるか判定
    if (string[i] >= 'A' && string[i] <= 'Z') {
      // 大文字がある場合の処理
      result += ' ' + string[i];
    } else {
      // 大文字が無い場合の処理
      result += string[i];
    }
  }
  return result;
}
breakCamelCase("testCase")

// CodeWars Bit Counting
function bitCounting(n: number): number {
  if (n) {
    return n.toString(2).match(/1/g)?.length ?? 0;
  }
  return 0;
}
bitCounting(2)

// Replace With Alphabet Position
function alphabetPosition(text: string): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return text
    .toLowerCase()
    .split('')
    .filter(char => alphabet.includes(char))
    .map(char => alphabet.indexOf(char) + 1)
    .join(' ')
}

// Friend or Foe?
function friend(friends: string[]): string[] {
  return friends.filter((f) => f.length === 4)
}

console.log(friend(["test", "te", "user"]))
