import db from './db';

export default (req, res) => {
  switch (req.method) {
    case 'GET':
      res.status(200).json(db);
      break;

    case 'POST':
      const newTask = { id: Date.now(), ...req.body };
      db.push(newTask);
      res.status(201).json(newTask);
      break;

    case 'DELETE':
      const taskId = req.query.id;
      const index = db.findIndex((task) => task.id === Number(taskId));
      db.splice(index, 1);
      res.status(200).json({});
      break;

    case 'PUT':
      const { id, ...updates } = req.body;
      const taskIndex = db.findIndex((task) => task.id === Number(id));
      db[taskIndex] = { ...db[taskIndex], ...updates };
      res.status(200).json(db[taskIndex]);
      break;

    default:
      res.status(405).json({});
      break;
  }
};

