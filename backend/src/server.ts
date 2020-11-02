import express from 'express';
import mongoose from 'mongoose';
import routes from './routes'

const app = express();

mongoose.connect('mongodb+srv://becare:becare@cluster0.qb0pn.mongodb.net/becare?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => console.log("MongoDB conectado"))
.catch((err) => console.error("Erro ao conectar com o MongoDB" + err));

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log("Servidor rodando em http://127.0.0.1:3333");
});

