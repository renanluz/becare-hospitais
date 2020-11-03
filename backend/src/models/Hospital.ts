import mongoose from 'mongoose';
import PointSchema from './utils/PointSchema';

const hospitalSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true,
    },
    phone: { 
        type: String,
        required: true,
    },
    address:{ 
        type: String,
        required: true,
    },
    cep: { 
        type: String,
        required: true,
    },
    location: {
        type: PointSchema,
        index: '2dsphere',
        required: true,
    }
});

const Hospital = mongoose.model('Hospital', hospitalSchema);

export default Hospital;