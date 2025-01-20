export const JavaScriptAnswersLvl1 = [
  [
    "function checkEvenOdd(numbers) { return numbers.map(num => num % 2 === 0 ? 'Even' : 'Odd').join(', '); } checkEvenOdd([2, 3, 64, 12, 14, 55, 1]);",
    "const checkEvenOdd = (numbers) => numbers.map(num => num % 2 === 0 ? 'Even' : 'Odd').join(', '); checkEvenOdd([2, 3, 64, 12, 14, 55, 1]);",
    "const nums = [2, 3, 64, 12, 14, 55, 1]; const result = nums.map(num => num % 2 === 0 ? 'Even' : 'Odd').join(', '); result;",
    "function checkEvenOdd(nums) { const results = nums.map(num => num % 2 === 0 ? 'Even' : 'Odd'); return results.join(', '); } checkEvenOdd([2, 3, 64, 12, 14, 55, 1]);",
    "function checkEvenOdd(numbers) {let result = []; for (let i = 0; i < numbers.length; i++) { if (numbers[i] % 2 === 0) { result.pus('Even');} else {result.push('Odd');}}return result.join(', ');}checkEvenOdd([2, 3, 64, 12, 14, 55, 1]);"
  ],
  [
    "function calculateSum() { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((sum, num) => sum + num, 0); } calculateSum();",
    "const calculateSum = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((sum, num) => sum + num, 0); calculateSum();",
    "const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; nums.reduce((sum, num) => sum + num, 0);",
    "function calculateSum(nums) { return nums.reduce((sum, num) => sum + num, 0); } calculateSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);",
  ],
  [
    "function reverseString(str) { return str.split('').reverse().join(''); } reverseString('hello world');",
    "const reverseString = (str) => str.split('').reverse().join(''); reverseString('hello world');",
    "const input = 'hello world'; const reversed = input.split('').reverse().join(''); reversed;",
    "function reverseString(input) { const reversed = input.split('').reverse().join(''); return reversed; } reverseString('hello world');",
  ],
];
