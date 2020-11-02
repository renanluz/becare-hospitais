import mongoose from 'mongoose';
import PointSchema from './utils/PointSchema';

const hospitalSchema = new mongoose.Schema({
    name: String,
    phone: String,
    address: String,
    cep: String,
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

const Hospital = mongoose.model('Hospital', hospitalSchema);

export default Hospital;