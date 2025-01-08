// api/login.js
export default function handler(req, res) {
  if (req.method === 'POST') {
      const { username, password } = req.body;
      if (username === 'student' && password === 'supassword') {
          res.status(200).json({ success: true });
      } else {
          res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
  } else {
      res.status(405).json({ message: 'Method not allowed' });
  }
}
