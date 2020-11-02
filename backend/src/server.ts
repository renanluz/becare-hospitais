import express from 'express';
import mongoose from 'mongoose';
import routes from './routes'

const app = express();

mongoose.connect('mongodb+srv://becare:becare@cluster0.qb0pn.mongodb.net/becare?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);

