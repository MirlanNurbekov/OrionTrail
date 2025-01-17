export const PythonAnswersLvl3 = [
  [
    "start, end = 10, 50\nprimes = []\nfor num in range(start, end + 1):\n    if num > 1:\n        for i in range(2, int(num**0.5) + 1):\n            if num % i == 0:\n                break\n        else:\n            primes.append(num)\nprint(primes)"
  ],
  [
    "list1 = [5, 12, 18, 25, 30]\nlist2 = [18, 25, 30, 35]\ncommon = sorted(set(list1) & set(list2))\nprint(common)"
  ],
  [
    "matrix = [[1, 2, 3], [4, 5, 6]]\ntranspose = [[matrix[j][i] for j in range(len(matrix))] for i in range(len(matrix[0]))]\nprint(transpose)"
  ],
  [
    "s = 'swiss'\nfirst_unique = None\nfor char in s:\n    if s.count(char) == 1:\n        first_unique = char\n        break\nprint(first_unique if first_unique else 'None')"
  ],
  [
    "employees = [{'name': 'Alice', 'salary': 3000}, {'name': 'Bob', 'salary': 4000}, {'name': 'Charlie', 'salary': 3500}]\ntotal_salary = sum(emp['salary'] for emp in employees)\nprint(total_salary)"
  ],
  [
    "nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]\nevens = [num for num in nums if num % 2 == 0]\nodds = [num for num in nums if num % 2 != 0]\nprint('evens =', evens)\nprint('odds =', odds)"
  ],
  [
    "sentence = 'the quick brown fox jumps over the lazy dog'\nwords = sentence.split()\nword_count = {}\nfor word in words:\n    word_count[word] = word_count.get(word, 0) + 1\nprint(word_count)"
  ],
  [
    "nums = [1, 2, 3, 4, 5]\nsteps = 2\nrotated = nums[steps:] + nums[:steps]\nprint(rotated)"
  ],
  [
    "from math import gcd\nfrom functools import reduce\nnums = [48, 64, 16]\ngcd_result = reduce(gcd, nums)\nprint(gcd_result)"
  ],
  [
    "nums = [12, 34, 56, 78]\ntotal_sum = sum(sum(int(digit) for digit in str(num)) for num in nums)\nprint(total_sum)"
  ],
];
