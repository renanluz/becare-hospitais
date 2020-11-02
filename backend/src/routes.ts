import { Router } from 'express';

const routes = Router();

routes.get('/users',(req, res) => {
    return res.json({message: 'Hello World'});
})

export default routes;