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
    
        return res.json(hospital);
    }
}