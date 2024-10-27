import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import posts from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


app.use('/posts', posts); 

const CONNECTION_URL = "mongodb+srv://marcosduarte1501:QjSksbhhiAl0zJqa@digitalhaven-cluster.jfnxf.mongodb.net/?retryWrites=true&w=majority&appName=DigitalHaven-cluster";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`)))
    .catch((error) => console.error('Erro na conexão com o MongoDB:', error.message)); 
