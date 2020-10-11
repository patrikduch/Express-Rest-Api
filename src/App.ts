import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', (req, res) => {
	res.send('Hello world	');
})

app.listen(PORT);