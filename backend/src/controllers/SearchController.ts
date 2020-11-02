import { Request, Response } from 'express';
import Hospital from '../models/Hospital';

export default {
    async index(req: Request, res: Response) {
        const {latitude, longitude } = req.query;

        const hospitais = await Hospital.find({
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 15000,
                },
            },
        });

        return res.json({ hospitais });
    }
}