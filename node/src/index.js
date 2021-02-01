const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
  return response.send('Hello');
});


app.get('/projects', (request, response) => {
  projetos = [
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ]
  return response.json(projetos);
});

app.put('/projects/:id', (request, response) => {
  const params = request.params;
  const query_params = request.query;
  const { title, owner } = request.query;

  console.log(params);
  console.log(query_params);
  console.log(title);
  console.log(owner);

  projetos = [
    'Projeto 5',
    'Projeto 2',
    'Projeto 3',
  ]
  return response.json(projetos);
});

app.post('/projects', (request, response) => {
  const body = request.body;
  console.log(body);

  const { title, owner } = request.body;
  console.log(title);
  console.log(owner);

  projetos = [
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ]
  return response.json(projetos);
});

app.listen(3333, () => {
  console.log('Backend server started!');
});