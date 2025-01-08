// api/questions.js
export default function handler(req, res) {
  if (req.method === 'GET') {
      const questions = {
          Python: [
              { level: 1, questions: ["Python Q1", "Python Q2", "Python Q3"] },
              { level: 2, questions: ["Python Q4", "Python Q5", "Python Q6"] },
              { level: 3, questions: ["Python Q7", "Python Q8", "Python Q9"] },
              { level: 4, questions: ["Python Q10", "Python Q11", "Python Q12"] },
          ],
          JavaScript: [
              { level: 1, questions: ["JS Q1", "JS Q2", "JS Q3"] },
              { level: 2, questions: ["JS Q4", "JS Q5", "JS Q6"] },
              { level: 3, questions: ["JS Q7", "JS Q8", "JS Q9"] },
              { level: 4, questions: ["JS Q10", "JS Q11", "JS Q12"] },
          ],
      };
      res.status(200).json(questions);
  } else {
      res.status(405).json({ message: 'Method not allowed' });
  }
}
