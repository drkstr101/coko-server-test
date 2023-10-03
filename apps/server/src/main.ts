import express from 'express';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/api/ping', (req, res) => {
  res.send({ message: 'Welcome to prism!' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
