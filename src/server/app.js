import express from 'express';
import mongoose from 'mongoose';

import { animalsrouter } from  './routes/animals.js';
import { RequestLogger } from './utils/logging.js';


//port declaration.
const PORT = 3090;
const app = express();

app.set('view engine', 'ejs');
app.set('views', import.meta.dirname + '/views');

app.use(express.static(import.meta.dirname + '/../client'));
// Middleware to log requests
app.use('/node_modules', express.static(import.meta.dirname + '/../../node_modules'));

app.use(RequestLogger);
app.use(animalsrouter);

mongoose.connect('mongodb://127.0.0.1:27017/inft2202')
        .then(() => console.log('Connected!'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});




// app.use(express.static('..'));
// app.use((req, res) => {
//     const { url, method } = req;
//     console.log(`[${new Date().toISOString()}] ${method} ${url}`);
// })

// app.get('/', (req,res) => {
//     res.writeHead(200, { 'Content-Type':  'text/plain' });
//     res.end('Hello World!');
// })

// app.get('/about', (req,res) => {
//     res.writeHead(200, { 'Content-Type':  'text/plain' });
//     res.end('This is me!!!!!');
// })

// app.get('/products', async (req,res) => {
//     const json = await readJson('./products.json');
//     res.writeHead(200, { 'Content-Type':  'application/plain' });
//     res.end(JSON.stringify(json));
// })

// app.listen(PORT,() => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });
