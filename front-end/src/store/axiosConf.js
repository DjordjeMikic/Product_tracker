import axios from 'axios';
import { HOST } from '../data';

export default axios.create({
    baseURL: HOST,
    headers: {
        'Contant-Type': 'application/json'
    }
})