export default function handler(req, res) {
  const { input1, input2 } = req.query;
  const result = Number(input1) + Number(input2);
  res.status(200).json({ result });
}

