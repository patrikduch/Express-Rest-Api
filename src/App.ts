import express from 'express';

const app = express();

app.use('/', (req, res) => {
	res.send('Hello world	');
})

app.listen(process.env.PORT || 5000);