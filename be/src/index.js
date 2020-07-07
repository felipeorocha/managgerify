const express = require('express');
const app = express();

// app.use(express.json());

let people = [];

app.get('/', (req, res) => {
  return res.send(people);
});

app.get('/:id', (req, res) => {
  const { id } = req.params;
  const person = people.filter(item => item.id === id);
  return res.send(person);
});

app.post('/', (req, res) => {
  const { name, age, id } = req.query;
  const person = { name, age, id };
  people.push(person);
  return res.end('ok');
});

app.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, age } = req.query;

  const personIndex = people.findIndex(person => person.id === id);
  const person = { name, age, id };

  people[personIndex] = person;

  return res.send('ok');
});

app.delete('/:id', (req, res) => {
  const { id } = req.params;
  const person = people.filter(persona => persona.id !== id);
  people = person;
  return res.end('ok');
});

app.listen(3000);
