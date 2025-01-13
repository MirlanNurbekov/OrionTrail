export const PythonAnswers = [
  // Level 1 Answers (20 answers)
  [
      `nums = [2, 3, 64, 12, 14, 55, 1]\nfor num in nums:\n    print("Even" if num % 2 == 0 else "Odd")`,
      `nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nprint(sum(nums))`,
      `s = "hello world"\nprint(s[::-1])`,
      `n = 5\nfactorial = 1\nfor i in range(1, n+1):\n    factorial *= i\nprint(factorial)`,
      `nums = [5, 12, 7, 9, 15, 3]\nprint(max(nums))`,
      `s = "programming"\nchar = "g"\nprint(s.count(char))`,
      `nums = [10, 20, 30, 40, 50]\nprint(sum(nums) / len(nums))`,
      `n = 20\nprimes = []\nfor i in range(2, n + 1):\n    if all(i % j != 0 for j in range(2, int(i**0.5) + 1)):\n        primes.append(i)\nprint(primes)`,
      `s = "radar"\nprint(s == s[::-1])`,
      `celsius = 25\nfahrenheit = (celsius * 9/5) + 32\nprint(fahrenheit)`,
      `nums = [7, 2, 8, 6, 4]\nprint(min(nums))`,
      `nums = [1, 2, 3, 4]\nprint(sum(x**2 for x in nums))`,
      `s = "education"\nvowels = "aeiou"\ncount = sum(1 for char in s if char in vowels)\nprint(count)`,
      `nums = [10, 20, 30, 40, 50]\nelement = 30\nprint(nums.index(element))`,
      `nums = [1, 2, 3, 1, 2, 4, 5]\nprint(list(set(nums)))`,
      `s = "programming"\nprint(len(s))`,
      `nums = [-5, 0, 10]\nfor num in nums:\n    if num > 0:\n        print("Positive")\n    elif num < 0:\n        print("Negative")\n    else:\n        print("Zero")`,
      `nums = [1, 2, 3, 4]\nresult = 1\nfor num in nums:\n    result *= num\nprint(result)`,
      `a, b = 48, 18\nwhile b:\n    a, b = b, a % b\nprint(a)`,
      `n = 5\nfor i in range(1, 11):\n    print(f"{n}x{i}={n*i}")`,
  ],
  // Level 2 Answers (10 answers)
  [
      `n = 50\nprimes = []\nfor i in range(2, n + 1):\n    if all(i % j != 0 for j in range(2, int(i**0.5) + 1)):\n        primes.append(i)\nprint(primes)`,
      `s = "madam"\nprint(s == s[::-1])`,
      `from collections import Counter\ns = "banana"\nprint(dict(Counter(s)))`,
      `nums = [1, 2, 3, 4, 5]\nprint(sum(x for x in nums if x % 2 != 0))`,
      `num = 12345\nprint(sum(int(digit) for digit in str(num)))`,
  ],
  // Level 3 Answers (10 answers)
  [
      `base, exponent = 2, 5\nresult = 1\nfor _ in range(exponent):\n    result *= base\nprint(result)`,
      `words = ["apple", "banana", "cherry", "kiwi"]\nprint(max(words, key=len))`,
      `import math\na, b = 24, 36\nprint(math.gcd(a, b))`,
  ],
  // Level 4 Answers (10 answers)
  [
      `def binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1\narr = [1, 3, 5, 7, 9]\nprint(binary_search(arr, 5))`,
      `from itertools import permutations\ns = "abc"\nprint(["".join(p) for p in permutations(s)])`,
      `def merge_sort(arr):\n    if len(arr) > 1:\n        mid = len(arr) // 2\n        L = arr[:mid]\n        R = arr[mid:]\n        merge_sort(L)\n        merge_sort(R)\n        i = j = k = 0\n        while i < len(L) and j < len(R):\n            if L[i] < R[j]:\n                arr[k] = L[i]\n                i += 1\n            else:\n                arr[k] = R[j]\n                j += 1\n            k += 1\n        while i < len(L):\n            arr[k] = L[i]\n            i += 1\n            k += 1\n        while j < len(R):\n            arr[k] = R[j]\n            j += 1\n            k += 1\narr = [34, 7, 23, 32, 5, 62]\nmerge_sort(arr)\nprint(arr)`,
  ],
];
