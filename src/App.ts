import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use('/', (req, res) => {
	res.send('Hello world');
})

app.listen(port, () => {
	console.log(`Server is listening on port: ${port}`);
})