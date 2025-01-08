export const JavaScriptAnswers = [
  { id: 1, solution: `const num = parseInt(prompt("Enter a number: "));\nif (num % 2 === 0) {\n    console.log("Even");\n} else {\n    console.log("Odd");\n}` },
  { id: 2, solution: `const a = parseInt(prompt("Enter first number: "));\nconst b = parseInt(prompt("Enter second number: "));\nconst c = parseInt(prompt("Enter third number: "));\nconst largest = Math.max(a, b, c);\nconsole.log(\`The largest number is \${largest}\`);` },
  { id: 3, solution: `const str = prompt("Enter a string: ");\nconst reversed = str.split('').reverse().join('');\nconsole.log(\`Reversed string: \${reversed}\`);` },
  // Add more answers as needed
];
