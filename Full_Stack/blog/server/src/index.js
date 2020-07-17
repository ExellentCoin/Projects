//Express imports
const express = require('express'); //Main express lib
const morgan = require('morgan'); //Lib for loging get and post requests
const cors = require('cors'); //Only allowing the backend to talk to the frontend
const helmet = require('helmet'); //Deleting and adding html-headers to mask express

//Express app setup
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('common'));
app.use(helmet());
app.use(
	cors({
		origin: 'http://localhost:3000',
	})
);

//Postgresql import
const { Client } = require('pg'); //Main postgres nodejs lib

//Other
require('dotenv').config(); //Use environement variables definded in .env file

//Create a connection client to database
const client = new Client(JSON.parse(process.env.PG_CLIENT_CONNECT_INFO));
client.connect();

//Get the blogs from the database in JSON format
app.get('/API/getBlogs', (req, res) => {
	const query = `
	SELECT * FROM public.blogs
	ORDER BY id ASC
	`;

	client
		.query(query)
		.then(response => {
			res.json(response.rows);
		})
		.catch(err => {
			console.error(err);
			res.send(err);
		});
});

//Add blogs to database as JSON object converted to sql querry
app.post('/API/addBlogs', (req, res) => {
	const query = `
		INSERT INTO blogs (author, title, content)
		VALUES ('${req.body.author}', '${req.body.title}', '${req.body.content}')
	`;

	client
		.query(query)
		.then(response => {
			console.log(`${response.rows} \n Successfully added requested data.`);
			res.sendStatus(200);
		})
		.catch(err => {
			console.error(err);
			res.send(err);
		});
});

const port = process.env.EXPRESS_PORT || 1337;
app.listen(port, () => {
	console.log(`The app is now listening on http://localhost:${port}`);
});
