import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', (req, res) => {
	res.send('Hello world	');
})

app.listen(process.env.PORT || 3000, () => {
	console.log("ENV");
	console.log(process.env)
	console.log(`PORT: ${process.env.port}`);
	console.log(`Server is listening on port: ${PORT}`);
})