// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 5000;

// server.use(middlewares);
// server.use(router);

// server.listen(port);

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const bookDatabase = require('./connection');
const app = express();

app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/pizzas', (req, res) => {
	bookDatabase('pizza')
		.select('*')
		.then((pizzas) => res.status(200).json(pizzas))
		.catch((error) => {
			res.status(500).json({ error: error.message, stack: error.stack });
		});
});

app.listen(PORT, () => console.log('Example app is listening!'));
