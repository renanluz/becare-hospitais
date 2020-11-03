import express from 'express';
import cors from 'cors';

import 'express-async-errors';
import mongoose from 'mongoose';

import routes from './routes'
import errorHandler from './errors/handler';

const app = express();

mongoose.connect('mongodb+srv://becare:becare@cluster0.qb0pn.mongodb.net/becare?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
}).then(() => console.log("MongoDB conectado"))
.catch((err) => console.error("Erro ao conectar com o MongoDB" + err));

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

app.listen(3333, () => {
    console.log("Servidor rodando em http://127.0.0.1:3333");
});

