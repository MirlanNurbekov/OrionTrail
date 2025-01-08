export const PythonAnswers = [
  { id: 1, solution: `num = int(input("Enter a number: "))\nif num % 2 == 0:\n    print("Even")\nelse:\n    print("Odd")` },
  { id: 2, solution: `a, b, c = map(int, input("Enter three numbers separated by space: ").split())\nlargest = max(a, b, c)\nprint(f"The largest number is {largest}")` },
  { id: 3, solution: `string = input("Enter a string: ")\nreversed_string = string[::-1]\nprint(f"Reversed string: {reversed_string}")` },
  // Add more answers as needed
];
