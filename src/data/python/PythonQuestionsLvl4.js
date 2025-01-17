export const PythonQuestionsLvl4 = [
  {
    description: `A bakery sells cakes at $20 each. Calculate the total price for 5 cakes.`,
    incorrectCode: `
price_per_item = 20
quantity = 5
total_price = price_per_item * quantity
print(total_price)

OUTPUT:
1. 25
2. 100
3. 120
4. 150
5. 200
`
  },
  {
    description: `A movie theater collects ratings. Calculate the average rating from the list: [4, 5, 3, 4, 5]. Round it to one decimal place.`,
    incorrectCode: `
ratings = [4, 5, 3, 4, 5]
average_rating = sum(ratings) / len(ratings)
print(round(average_rating, 1))

OUTPUT:
1. 4.0
2. 4.2
3. 3.8
4. 4.5
5. 5.0
`
  },
  {
    description: `A store records daily sales. Find the maximum sale amount from the list: [300, 400, 500, 600, 700].`,
    incorrectCode: `
sales = [300, 400, 500, 600, 700]
max_sale = max(sales)
print(max_sale)

OUTPUT:
1. 500
2. 600
3. 700
4. 800
5. 900
`
  },
  {
    description: `Calculate the total cost for renting a car at $40 per day for 7 days.`,
    incorrectCode: `
daily_rate = 40
days = 7
total_cost = daily_rate * days
print(total_cost)

OUTPUT:
1. 180
2. 240
3. 280
4. 300
5. 320
`
  },
  {
    description: `A bakery offers a 10% discount on orders of 10 cakes. Calculate the discounted price for cakes priced at $15 each.`,
    incorrectCode: `
cake_price = 15
quantity = 10
total_price = cake_price * quantity
discounted_price = total_price * 0.9
print(discounted_price)

OUTPUT:
1. 120
2. 135
3. 150
4. 180
5. 200
`
  },
  {
    description: `Calculate the total fee for a 12-month gym membership where the first month is free. Each month costs $50.`,
    incorrectCode: `
monthly_fee = 50
months = 12
total_price = monthly_fee * (months - 1)
print(total_price)

OUTPUT:
1. 550
2. 600
3. 650
4. 700
5. 750
`
  },
  {
    description: `A coffee shop sells cups of coffee at $3 each. Calculate the total earnings for selling 30 cups.`,
    incorrectCode: `
cups_sold = 30
price_per_cup = 3
total_earnings = cups_sold * price_per_cup
print(total_earnings)

OUTPUT:
1. 80
2. 90
3. 100
4. 110
5. 120
`
  },
  {
    description: `A concert ticket costs $25. Calculate the total revenue for selling 120 tickets.`,
    incorrectCode: `
ticket_price = 25
tickets_sold = 120
total_revenue = ticket_price * tickets_sold
print(total_revenue)

OUTPUT:
1. 3000
2. 2500
3. 2800
4. 2400
5. 3200
`
  },
  {
    description: `A freelancer works for 160 hours a month at $20 per hour. Calculate the monthly income.`,
    incorrectCode: `
hours_worked = 160
hourly_rate = 20
monthly_income = hours_worked * hourly_rate
print(monthly_income)

OUTPUT:
1. 3000
2. 3200
3. 3600
4. 4000
5. 4200
`
  },
  {
    description: `A warehouse manager calculates the total weight of 5 bags, each weighing 10 kg.`,
    incorrectCode: `
bag_weight = 10
bags = 5
total_weight = bag_weight * bags
print(total_weight)

OUTPUT:
1. 30
2. 40
3. 50
4. 60
5. 70
`
  }
];
