export const PythonQuestions = [
    [
        { number: 1, description: "Write a Python program to check if a number is even or odd.", solution: `num = int(input("Enter a number: "))\nif num % 2 == 0:\n    print("Even")\nelse:\n    print("Odd")` },
        { number: 2, description: "Write a Python program to find the largest of three numbers.", solution: `a, b, c = map(int, input("Enter three numbers separated by space: ").split())\nprint(max(a, b, c))` },
        { number: 3, description: "Write a Python program to reverse a string.", solution: `string = input("Enter a string: ")\nprint(string[::-1])` },
    ],
    [
        { number: 1, description: "Write a Python program to generate the Fibonacci sequence up to n terms.", solution: `n = int(input("Enter the number of terms: "))\nfib = [0, 1]\nfor i in range(2, n):\n    fib.append(fib[-1] + fib[-2])\nprint(fib[:n])` },
        { number: 2, description: "Write a Python program to check if a string is a palindrome.", solution: `s = input("Enter a string: ")\nprint("Palindrome" if s == s[::-1] else "Not a palindrome")` },
        { number: 3, description: "Write a Python program to count the frequency of each word in a string.", solution: `from collections import Counter\ntext = input("Enter text: ")\nprint(Counter(text.split()))` },
    ],
    [
        { number: 1, description: "Write a Python program to find all prime numbers between two numbers.", solution: `start, end = map(int, input("Enter range: ").split())\nprimes = [x for x in range(start, end+1) if all(x % i != 0 for i in range(2, int(x**0.5) + 1))]\nprint(primes)` },
        { number: 2, description: "Write a Python program to sort a list of tuples by the second element.", solution: `data = [(1, 3), (4, 1), (2, 2)]\ndata.sort(key=lambda x: x[1])\nprint(data)` },
        { number: 3, description: "Write a Python program to solve a quadratic equation.", solution: `import cmath\na, b, c = map(float, input("Enter coefficients: ").split())\nd = cmath.sqrt(b**2 - 4*a*c)\nx1 = (-b + d) / (2*a)\nx2 = (-b - d) / (2*a)\nprint(f"Roots: {x1}, {x2}")` },
    ],
    [
        { number: 1, description: "BOOOM", solution: `s = input("Enter a string: ")\nseen, start, max_len = {}, 0, 0\nfor i, c in enumerate(s):\n    if c in seen and seen[c] >= start:\n        start = seen[c] + 1\n    seen[c] = i\n    max_len = max(max_len, i - start + 1)\nprint(max_len)` },
        { number: 2, description: "Write a Python program to find the factorial of a number using recursion.", solution: `def factorial(n):\n    return 1 if n == 0 else n * factorial(n-1)\nn = int(input("Enter a number: "))\nprint(factorial(n))` },
        { number: 3, description: "Write a Python program to merge two dictionaries.", solution: `d1 = {"a": 1, "b": 2}\nd2 = {"b": 3, "c": 4}\nd1.update(d2)\nprint(d1)` },
    ],
];
