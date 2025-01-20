export const PythonAnswersLvl1 = [
  [
    "nums=[2,3,64,12,14,55,1]\nfor num in nums:print('Even'if num%2==0 else'Odd')",
    "nums=[2,3,64,12,14,55,1]\nprint(','.join(['Even'if num%2==0 else'Odd'for num in nums]))",
    "nums=[2,3,64,12,14,55,1]\nresult=['Even'if num%2==0 else'Odd'for num in nums]\nfor r in result:print(r)",
  ],
  [
    "nums=[1,2,3,4,5,6,7,8,9,10]\nprint(sum(nums))",
    "nums=[1,2,3,4,5,6,7,8,9,10]\ntotal=0\nfor num in nums:total+=num\nprint(total)",
    "nums=[1,2,3,4,5,6,7,8,9,10]\nprint(reduce(lambda x,y:x+y,nums))",
  ],
  [
    "s='hello world'\nprint(s[::-1])",
    "s='hello world'\nprint(''.join(reversed(s)))",
    "s='hello world'\nreversed_str=''\nfor char in s:reversed_str=char+reversed_str\nprint(reversed_str)",
  ],
  [
    "nums=[3,5,7,2,8]\nprint(max(nums))",
    "nums=[3,5,7,2,8]\nprint(sorted(nums)[-1])",
    "nums=[3,5,7,2,8]\nlargest=nums[0]\nfor num in nums:largest=max(largest,num)\nprint(largest)",
  ],
  [
    "s='programming'\nchar='g'\nprint(s.count(char))",
    "s='programming'\nprint(len([ch for ch in s if ch=='g']))",
    "s='programming'\ncount=0\nfor ch in s:count+=1 if ch=='g'else 0\nprint(count)",
  ],
  [
    "n=5\nfactorial=1\nfor i in range(1,n+1):factorial*=i\nprint(factorial)",
    "import math\nn=5\nprint(math.factorial(n))",
    "n=5\nprint(eval('*'.join(map(str,range(1,n+1)))))",
  ],
  [
    "nums=[1,2,3,4,5,6]\nevens=[num for num in nums if num%2==0]\nprint(evens)",
    "nums=[1,2,3,4,5,6]\nprint(list(filter(lambda x:x%2==0,nums)))",
    "nums=[1,2,3,4,5,6]\nevens=[]\nfor num in nums:if num%2==0:evens.append(num)\nprint(evens)",
  ],
  [
    "s='radar'\nprint(s==s[::-1])",
    "s='radar'\nprint(all(s[i]==s[-i-1]for i in range(len(s)//2)))",
    "s='radar'\nprint('Yes'if s==s[::-1]else'No')",
  ],
  [
    "celsius=25\nfahrenheit=(celsius*9/5)+32\nprint(fahrenheit)",
    "celsius=25\nprint('{:.1f}'.format(celsius*1.8+32))",
    "celsius=25\nprint((lambda c:c*9/5+32)(celsius))",
  ],
  [
    "nums=[1,2,3]\nsum_of_squares=sum(x**2 for x in nums)\nprint(sum_of_squares)",
    "nums=[1,2,3]\nsum_of_squares=0\nfor num in nums:sum_of_squares+=num**2\nprint(sum_of_squares)",
    "nums=[1,2,3]\nprint(sum(map(lambda x:x**2,nums)))",
  ],
  [
    "nums=[1,2,2,3,4,4,5]\nunique_nums=list(set(nums))\nprint(unique_nums)",
    "nums=[1,2,2,3,4,4,5]\nprint(sorted(set(nums)))",
    "nums=[1,2,2,3,4,4,5]\nunique=[]\nfor num in nums:if num not in unique:unique.append(num)\nprint(unique)",
  ],
  [
    "s='hello'\nprint(len(s))",
    "s='hello'\nprint(sum(1 for _ in s))",
    "s='hello'\nlength=0\nfor _ in s:length+=1\nprint(length)",
  ],
  [
    "nums=[10,3,7,1,9]\nprint(min(nums))",
    "nums=[10,3,7,1,9]\nprint(sorted(nums)[0])",
    "nums=[10,3,7,1,9]\nsmallest=nums[0]\nfor num in nums:smallest=min(smallest,num)\nprint(smallest)",
  ],
  [
    "s='education'\nvowels='aeiou'\ncount=sum(1 for char in s if char in vowels)\nprint(count)",
    "s='education'\nprint(len([char for char in s if char in'aeiou']))",
    "s='education'\nvowels='aeiou'\ncount=0\nfor char in s:if char in vowels:count+=1\nprint(count)",
  ],
  [
    "nums=[2,4,6,8]\naverage=sum(nums)/len(nums)\nprint(average)",
    "nums=[2,4,6,8]\nprint('{:.1f}'.format(sum(nums)/len(nums)))",
    "nums=[2,4,6,8]\ntotal=0\nfor num in nums:total+=num\nprint(total/len(nums))",
  ],
  [
    "nums=[1,3,7,9]\nelement=7\nprint(nums.index(element))",
    "nums=[1,3,7,9]\nelement=7\nprint(next(i for i,x in enumerate(nums)if x==element))",
    "nums=[1,3,7,9]\nelement=7\nfor i,num in enumerate(nums):\n    if num==element:\n        print(i)",
  ],
  [
    "n=29\nif n>1 and all(n%i!=0 for i in range(2,int(n**0.5)+1)):\n    print(True)\nelse:\n    print(False)",
    "n=29\nis_prime=n>1\nfor i in range(2,int(n**0.5)+1):\n    if n%i==0:\n        is_prime=False\n        break\nprint(is_prime)",
    "n=29\nprint('Prime'if all(n%i!=0 for i in range(2,int(n**0.5)+1))else'Not Prime')",
  ],
  [
    "a,b=36,60\nwhile b:a,b=b,a%b\nprint(a)",
    "from math import gcd\na,b=36,60\nprint(gcd(a,b))",
    "a,b=36,60\nfor i in range(min(a,b),0,-1):\n    if a%i==0 and b%i==0:\n        print(i)\n        break",
  ],
  [
    "n=3\nfor i in range(1,11):\n    print(f'{n}x{i}={n*i}')",
    "n=3\nprint('\\n'.join([f'{n}x{i}={n*i}'for i in range(1,11)]))",
    "n=3\ntable=[f'{n}x{i}={n*i}'for i in range(1,11)]\nfor line in table:print(line)",
  ],
  [
    "year=2024\nprint(year%4==0 and(year%100!=0 or year%400==0))",
    "year=2024\nis_leap=year%4==0 and(year%100!=0 or year%400==0)\nprint(is_leap)",
    "year=2024\nleap=False\nif year%4==0:\n    if year%100!=0 or year%400==0:\n        leap=True\nprint(leap)",
  ],
  [
    "nums=[4,1,8,2,9]\nnums.remove(max(nums))\nprint(max(nums))",
    "nums=[4,1,8,2,9]\nprint(sorted(nums)[-2])",
    "nums=[4,1,8,2,9]\nfirst=max(nums)\nnums.remove(first)\nprint(max(nums))",
  ],
  [
    "n=12345\nprint(sum(int(digit)for digit in str(n)))",
    "n=12345\ntotal=0\nfor digit in str(n):\n    total+=int(digit)\nprint(total)",
    "n=12345\nprint(reduce(lambda x,y:x+int(y),str(n),0))",
  ],
  [
    "dict1={'a':1,'b':2}\ndict2={'c':3,'d':4}\nmerged={**dict1,**dict2}\nprint(merged)",
    "dict1={'a':1,'b':2}\ndict2={'c':3,'d':4}\nfor key,value in dict2.items():\n    dict1[key]=value\nprint(dict1)",
    "dict1={'a':1,'b':2}\ndict2={'c':3,'d':4}\nprint(dict1|dict2)",
  ],
  [
    "list1=[1,2,3,4]\nlist2=[3,4,5,6]\nintersection=list(set(list1)&set(list2))\nprint(intersection)",
    "list1=[1,2,3,4]\nlist2=[3,4,5,6]\nprint([x for x in list1 if x in list2])",
    "list1=[1,2,3,4]\nlist2=[3,4,5,6]\nintersection=[]\nfor x in list1:\n    if x in list2:\n        intersection.append(x)\nprint(intersection)",
  ],
  [
    "nested=[[1,2],[3,4],[5]]\nflat=[item for sublist in nested for item in sublist]\nprint(flat)",
    "nested=[[1,2],[3,4],[5]]\nflat=sum(nested,[])\nprint(flat)",
    "nested=[[1,2],[3,4],[5]]\nflat=[]\nfor sublist in nested:\n    flat.extend(sublist)\nprint(flat)",
  ],
  [
    "n=12\nprint([i for i in range(1,n+1)if n%i==0])",
    "n=12\nfactors=[]\nfor i in range(1,n+1):\n    if n%i==0:\n        factors.append(i)\nprint(factors)",
    "n=12\nprint(list(filter(lambda x:n%x==0,range(1,n+1))))",
  ],
  [
    "s='hello'\nprint(s.upper())",
    "s='hello'\nprint(''.join([char.upper()for char in s]))",
    "s='hello'\nuppercase=''\nfor char in s:\n    uppercase+=char.upper()\nprint(uppercase)",
  ],
  [
    "n=5\nfib=[0,1]\nfor i in range(2,n):\n    fib.append(fib[-1]+fib[-2])\nprint(fib[:n])",
    "n=5\nfib=[0,1]\nwhile len(fib)<n:\n    fib.append(fib[-1]+fib[-2])\nprint(fib[:n])",
    "n=5\nfib=[0,1]\nfor _ in range(n-2):\n    fib.append(fib[-1]+fib[-2])\nprint(fib[:n])",
  ],
  [
    "s1,s2='listen','silent'\nprint(sorted(s1)==sorted(s2))",
    "s1,s2='listen','silent'\nfrom collections import Counter\nprint(Counter(s1)==Counter(s2))",
    "s1,s2='listen','silent'\nprint(set(s1)==set(s2)and all(s1.count(c)==s2.count(c)for c in s1))",
  ],
  [
    "nums=[2,4,6,8]\nproduct=1\nfor num in nums:\n    product*=num\nprint(product)",
    "nums=[2,4,6,8]\nprint(eval('*'.join(map(str,nums))))",
    "nums=[2,4,6,8]\nprint(reduce(lambda x,y:x*y,nums))",
  ],
];
