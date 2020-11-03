import { Request, Response } from 'express';
import Hospital from '../models/Hospital';

export default {
    async index(req: Request, res: Response) {
        try {
            const hospitais = await Hospital.find();

            return res.json(hospitais);
        } catch (ex) {
            throw new Error(ex);
        }
    },

    async create(req: Request, res: Response) {

        const { name, phone, address, cep, latitude, longitude } = req.body;

        let hospital = await Hospital.findOne({ name });

        try {
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
            } 
        } catch (error) {
            throw new Error(error);
        }
        return res.sendStatus(201);
    },

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const {name, phone, address, cep, latitude, longitude } = req.body;

        const data = req.body;

        try {
            if(! data || !id) {
                res.sendStatus(400)
            }
            const hospital = await Hospital.findByIdAndUpdate(id, { name, phone, address, cep, latitude, longitude })

            return res.sendStatus(201);
        } catch (error) {
            throw new Error(error)
        }
    },

    async destroy(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const hospital = await Hospital.findByIdAndRemove(id);

            return res.sendStatus(201);
        } catch (error) {
            throw new Error(error)
        }
    },
}