import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID FztJPDDzhuNWP6jbdBb7qoH6erLkey3vUwfBwNOLLvs'
    }
});

