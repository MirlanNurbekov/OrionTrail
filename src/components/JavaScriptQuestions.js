export const JavaScriptQuestions = [
    // Level 1 Questions
    [
        { 
            number: 1, 
            description: "Level 1 - Question 1: Write a JavaScript program to check if a number is even or odd.", 
            solution: `const num = parseInt(prompt("Enter a number: "));\nconsole.log(num % 2 === 0 ? "Even" : "Odd");` 
        },
        { 
            number: 2, 
            description: "Level 1 - Question 2: Write a JavaScript program to find the largest of three numbers.", 
            solution: `const a = 10, b = 20, c = 30;\nconsole.log("Largest number:", Math.max(a, b, c));` 
        },
        { 
            number: 3, 
            description: "Level 1 - Question 3: Write a JavaScript program to reverse a string.", 
            solution: `const str = prompt("Enter a string: ");\nconsole.log(str.split("").reverse().join(""));` 
        },
    ],

    // Level 2 Questions
    [
        { 
            number: 1, 
            description: "Level 2 - Question 1: Write a JavaScript program to generate the Fibonacci sequence.", 
            solution: `const n = 10;\nconst fib = [0, 1];\nfor (let i = 2; i < n; i++) {\n    fib.push(fib[i - 1] + fib[i - 2]);\n}\nconsole.log(fib);` 
        },
        { 
            number: 2, 
            description: "Level 2 - Question 2: Write a JavaScript program to check if a string is a palindrome.", 
            solution: `const str = prompt("Enter a string: ");\nconsole.log(str === str.split("").reverse().join("") ? "Palindrome" : "Not a palindrome");` 
        },
        { 
            number: 3, 
            description: "Level 2 - Question 3: Write a JavaScript program to count the frequency of words in a string.", 
            solution: `const text = "hello world hello";\nconst words = text.split(" ");\nconst freq = {};\nwords.forEach(word => {\n    freq[word] = (freq[word] || 0) + 1;\n});\nconsole.log(freq);` 
        },
    ],

    // Level 3 Questions
    [
        { 
            number: 1, 
            description: "Level 3 - Question 1: Write a JavaScript program to find all prime numbers between two numbers.", 
            solution: `function isPrime(num) {\n    if (num <= 1) return false;\n    for (let i = 2; i <= Math.sqrt(num); i++) {\n        if (num % i === 0) return false;\n    }\n    return true;\n}\nconst primes = [];\nconst start = 10, end = 30;\nfor (let i = start; i <= end; i++) {\n    if (isPrime(i)) primes.push(i);\n}\nconsole.log(primes);` 
        },
        { 
            number: 2, 
            description: "Level 3 - Question 2: Write a JavaScript program to sort an array of objects by a property.", 
            solution: `const arr = [{a: 3}, {a: 1}, {a: 2}];\narr.sort((x, y) => x.a - y.a);\nconsole.log(arr);` 
        },
        { 
            number: 3, 
            description: "Level 3 - Question 3: Write a JavaScript program to solve a quadratic equation.", 
            solution: `const [a, b, c] = [1, -3, 2];\nconst discriminant = b ** 2 - 4 * a * c;\nif (discriminant > 0) {\n    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);\n    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);\n    console.log("Roots are:", root1, root2);\n}` 
        },
    ],

    // Level 4 Questions
    [
        { 
            number: 1, 
            description: "Level 4 - Question 1: Write a JavaScript program to find the longest unique substring of a string.", 
            solution: `function uniqueSubstring(s) {\n    let maxLength = 0, start = 0, seen = {};\n    for (let i = 0; i < s.length; i++) {\n        if (seen[s[i]] >= start) {\n            start = seen[s[i]] + 1;\n        }\n        seen[s[i]] = i;\n        maxLength = Math.max(maxLength, i - start + 1);\n    }\n    return maxLength;\n}\nconsole.log(uniqueSubstring("abcabcbb"));` 
        },
        { 
            number: 2, 
            description: "Level 4 - Question 2: Write a JavaScript program to calculate factorial recursively.", 
            solution: `function factorial(n) {\n    if (n === 0) return 1;\n    return n * factorial(n - 1);\n}\nconsole.log(factorial(5));` 
        },
        { 
            number: 3, 
            description: "Level 4 - Question 3: Write a JavaScript program to merge two objects.", 
            solution: `const obj1 = {a: 1};\nconst obj2 = {b: 2};\nconst merged = {...obj1, ...obj2};\nconsole.log(merged);` 
        },
    ],
];
