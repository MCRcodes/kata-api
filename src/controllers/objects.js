const {
  createPerson,
  hasProperty,
  findHondas,
  averageAge,
} = require('../lib/objects');

exports.createPerson = (req, res) => {
  const { age, name } = req.body;
  if (isNaN(age)) {
    res.status(400).json({ error: 'Age parameter must be a number.' });
  } else {
    res.status(200).json({ result: createPerson(name, age) });
  }
};

exports.hasProperty = (req, res) => {
  res.status(200).json({ result: hasProperty(req.body.property, req.body.object) });
};

exports.findHondas = (req, res) => {
  const cars = req.body.cars;
  if (findHondas(cars).length === 0) {
    res.status(400).json({ error: 'Supplied array contains no cars manufactured by honda' });
  } else {
    res.status(200).json({ result: findHondas(cars) });
  }
};

exports.averageAge = (req, res) => {
  const people = req.body.people;
  // console.log(people);
  // if (averageAge(cars).length === 0) {
  // res.status(400).json({ error: 'Supplied array contains no cars manufactured by honda' });
  // } else {
  res.status(200).json({ result: averageAge(people) });
  // }
};
