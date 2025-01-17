export const PythonAnswersLvl3 = [
  [
    "matrix1 = [[1, 2], [3, 4]]\nmatrix2 = [[5, 6], [7, 8]]\nresult = [[matrix1[i][j] + matrix2[i][j] for j in range(len(matrix1[0]))] for i in range(len(matrix1))]\nprint(result)"
  ],
  [
    "text = 'This is a simple text with some duplicate words, simple words.'\nwords = text.split()\nword_count = {}\nfor word in words:\n    word_count[word] = word_count.get(word, 0) + 1\nmost_common_word = max(word_count, key=word_count.get)\nprint(most_common_word)"
  ],
  [
    "text = 'Hello world! Python programming is fun.'\nword_lengths = {word: len(word) for word in text.split()}\nprint(word_lengths)"
  ],
  [
    "nums = [1, 2, 3, 4, 5]\nk = 3\nrotated = nums[-k:] + nums[:-k]\nprint(rotated)"
  ],
  [
    "n = 5\ntriangle = []\nfor i in range(n):\n    triangle.append([1 if j == 0 or j == i else triangle[i-1][j-1] + triangle[i-1][j] for j in range(i + 1)])\nfor row in triangle:\n    print(row)"
  ],
  [
    "n = 3\nmatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\ntransposed = [[matrix[j][i] for j in range(n)] for i in range(n)]\nprint(transposed)"
  ],
  [
    "nums = [1, 2, 3, 4, 5]\ntarget = 6\nresult = [(nums[i], nums[j]) for i in range(len(nums)) for j in range(i + 1, len(nums)) if nums[i] + nums[j] == target]\nprint(result)"
  ],
  [
    "data = [2, 4, 6, 8]\nresult = [(i, j) for i in data for j in data if i != j and i + j == 10]\nprint(result)"
  ],
  [
    "words = ['apple', 'banana', 'cherry', 'date', 'elderberry']\nlength_sorted = sorted(words, key=lambda word: len(word), reverse=True)\nprint(length_sorted)"
  ],
  [
    "nums = [5, 7, 2, 8, 10, 9]\nsorted_nums = sorted(nums, reverse=True)\nprint(sorted_nums)"
  ],
];
