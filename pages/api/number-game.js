export default function handler(req, res) {
  const { guess } = req.query;
  const number = Math.floor(Math.random() * 10) + 1;
  const message = guess == number ? 'Correct!' : `Incorrect, the number was ${number}.`;
  res.status(200).json({ message });
}

