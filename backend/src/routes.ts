import { Router } from 'express';
import HospitalController from './controllers/HospitalController';
import SearchController from './controllers/SearchController';


const routes = Router();

routes.get('/hospitais', HospitalController.index);
routes.post('/hospitais', HospitalController.create);

routes.get('/busca', SearchController.index);

export default routes;