export const PythonQuestionsLvl2 = [
  {
    description: `Fix the code to calculate the sum of a list of numbers.\nThe list of numbers: [1, 2, 3, 4, 5].Expected result:Solved code.`,
    incorrectCode: `nums = [1, 2, 3, 4, 5]\nprint(sum(nums)`
  },
  {
    description: `Fix the code to find the maximum number in a list.\nThe list: [3, 5, 7, 2, 8].Expected result:Solved code.`,
    incorrectCode: `nums = [3, 5, 7, 2, 8]\nprint(max(nums)`
  },
  {
    description: `Fix the code to check if a string is a palindrome.\nThe string: 'radar'.Expected result:Solved code.`,
    incorrectCode: `s = 'radar'\nprint(s == s.reverse())`
  },
  {
    description: `Fix the code to calculate the factorial of a number.\nThe number: 5.Expected result:Solved code.`,
    incorrectCode: `n = 5\nfactorial = 1\nfor i in range(1, n):\n    factorial *= i\nprint(factorial)`
  },
  {
    description: `Fix the code to reverse a string.\nThe string: 'hello'.Expected result:Solved code.`,
    incorrectCode: `s = 'hello'\nprint(reverse(s))`
  },
  {
    description: `Fix the code to count vowels in a string.\nThe string: 'education'.Expected result:Solved code.`,
    incorrectCode: `s = 'education'\nvowels = 'aeiou'\ncount = 0\nfor char in s:\n    if char in vowels\n        count += 1\nprint(count)`
  },
  {
    description: `Fix the code to find the smallest number in a list.\nThe list: [10, 3, 7, 1, 9].Expected result:Solved code.`,
    incorrectCode: `nums = [10, 3, 7, 1, 9]\nprint(min(nums)`
  },
  {
    description: `Fix the code to convert a temperature from Celsius to Fahrenheit.\nCelsius: 25.Expected result:Solved code.`,
    incorrectCode: `celsius = 25\nfahrenheit = celsius * 9/5 + 32\nprint fahrenheit`
  },
  {
    description: `Fix the code to calculate the sum of squares of numbers in a list.\nList: [1, 2, 3].Expected result:Solved code.`,
    incorrectCode: `nums = [1, 2, 3]\nsum_of_squares = sum(x^2 for x in nums)\nprint(sum_of_squares)`
  },
  {
    description: `Fix the code to merge two dictionaries.\ndict1 = {'a': 1}, dict2 = {'b': 2}.Expected result:Solved code.`,
    incorrectCode: `dict1 = {'a': 1}\ndict2 = {'b': 2}\nmerged = dict1 + dict2\nprint(merged)`
  },
  {
    description: `Fix the code to find common elements in two lists.\nList1: [1, 2, 3], List2: [2, 3, 4].Expected result:Solved code.`,
    incorrectCode: `list1 = [1, 2, 3]\nlist2 = [2, 3, 4]\nprint(list1 & list2)`
  },
  {
    description: `Fix the code to calculate the GCD of two numbers.\nNumbers: 48, 18.Expected result:Solved code.`,
    incorrectCode: `import gcd\nprint(gcd(48, 18))`
  },
  {
    description: `Fix the code to flatten a nested list.\nNested list: [[1, 2], [3, 4]].Expected result:Solved code.`,
    incorrectCode: `nested = [[1, 2], [3, 4]]\nflat = [nested]\nprint(flat)`
  },
  {
    description: `Fix the code to count the frequency of characters in a string.\nString: 'banana'.Expected result:Solved code.`,
    incorrectCode: `from collections import Counter\ns = 'banana'\nprint(Counter(s))`
  },
  {
    description: `Fix the code to find the prime numbers up to a given number.\nNumber: 20.Expected result:Solved code.`,
    incorrectCode: `primes = []\nfor i in range(2, 20):\n    for j in range(2, i):\n        if i % j == 0\n            break\n    else:\n        primes.append(i)\nprint(primes)`
  },
  {
    description: `Fix the code to implement a basic calculator for addition.\nInput: 5 + 3.Expected result:Solved code.`,
    incorrectCode: `a = 5\nb = 3\nprint(a plus b)`
  },
  {
    description: `Fix the code to find all divisors of a number.\nNumber: 12.Expected result:Solved code.`,
    incorrectCode: `n = 12\ndivisors = [i for i in range(1, n) if n % i == 0]\nprint(divisors)`
  },
  {
    description: `Fix the code to create a multiplication table.\nNumber: 5.Expected result:Solved code.`,
    incorrectCode: `n = 5\nfor i in range(1, 10):\n    print(n * i)`
  },
  {
    description: `Fix the code to check if a year is a leap year.\nYear: 2024.Expected result:Solved code.`,
    incorrectCode: `year = 2024\nprint(year % 4 == 0 and (year % 100 != 0 or year / 400 == 0))`
  },
  {
    description: `Fix the code to calculate the average of a list of numbers.\nList: [1, 2, 3].Expected result:Solved code.`,
    incorrectCode: `nums = [1, 2, 3]\naverage = nums / len(nums)\nprint(average)`
  },
  {
    description: `Fix the code to find the length of a string.\nString: 'hello'.Expected result:Solved code.`,
    incorrectCode: `s = 'hello'\nprint(length(s))`
  },
  {
    description: `Fix the code to find the intersection of two sets.\nSets: {1, 2, 3}, {2, 3, 4}.Expected result:Solved code.`,
    incorrectCode: `set1 = {1, 2, 3}\nset2 = {2, 3, 4}\nprint(set1.intersect(set2))`
  },
  {
    description: `Fix the code to find the longest word in a list.\nList: ['apple', 'banana', 'pear'].Expected result:Solved code.`,
    incorrectCode: `words = ['apple', 'banana', 'pear']\nprint(max(words, key=length))`
  },
  {
    description: `Fix the code to calculate the power of a number.\nBase: 2, Exponent: 3.Expected result:Solved code.`,
    incorrectCode: `base = 2\nexponent = 3\nprint(base ^ exponent)`
  },
  {
    description: `Fix the code to capitalize the first letter of each word in a string.\nString: 'hello world'.Expected result:Solved code.`,
    incorrectCode: `s = 'hello world'\nprint(s.titleize())`
  },
  {
    description: `Fix the code to merge two lists.\nLists: [1, 2], [3, 4].Expected result:Solved code.`,
    incorrectCode: `list1 = [1, 2]\nlist2 = [3, 4]\nprint(list1 join list2)`
  },
  {
    description: `Fix the code to remove duplicates from a list.\nList: [1, 2, 2, 3].Expected result:Solved code.`,
    incorrectCode: `nums = [1, 2, 2, 3]\nunique_nums = nums\nprint(unique_nums)`
  },
  {
    description: `Fix the code to convert a list of integers to a single concatenated string.\nList: [1, 2, 3].Expected result:Solved code.`,
    incorrectCode: `nums = [1, 2, 3]\nprint(nums.concat())`
  },
  {
    description: `Fix the code to create a dictionary from two lists.\nLists: ['a', 'b'], [1, 2].Expected result:Solved code.`,
    incorrectCode: `keys = ['a', 'b']\nvalues = [1, 2]\nprint(keys.values)`
  },
  {
    description: `Fix the code to remove whitespace from the start and end of a string.\nString: '  hello  '.Expected result:Solved code.`,
    incorrectCode: `s = '  hello  '\nprint(s.stripspace())`
  }
];
