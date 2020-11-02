import { Request, Response } from 'express';
import Hospital from '../models/Hospital';

export default {
    async index(req: Request, res: Response) {
        const hospitais = await Hospital.find();
        return res.json(hospitais);
    },

    async create(req: Request, res: Response) {

        const { name, phone, address, cep, latitude, longitude } = req.body;

        let hospital = await Hospital.findOne({ name });
        console.log(hospital);
        if (!hospital) {        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }
        
            hospital = await Hospital.create({
                name, 
                phone, 
                address, 
                cep,
                location,
            });
        } else {
            console.log("Erro - Já existe uma hospital com esse nome.")
        }

    
        return res.json(hospital);
    },

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const {name, phone, address, cep, latitude, longitude } = req.body;

        const data = req.body;
        if(! data || !id) {
            res.sendStatus(400)
        }
        const hospital = await Hospital.findByIdAndUpdate(id, { name, phone, address, cep, latitude, longitude })
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(400));
        
        return res.json(hospital);
    },

    async destroy(req: Request, res: Response) {
        const { id } = req.params;
        const hospital = await Hospital.findByIdAndRemove(id)
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(400));

        return res.json(hospital);
    }
}