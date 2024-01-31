import axios from "axios";

export const api = axios.create({
    baseURL: 'http://127.0.0.1:3333/',
    timeout: 1200,
    headers: {
        Authorization: 'Bearer MQ.MrCJ6Oc0IoO_3FKeAnCVsHXyN1GPBLyEHaAdygcw-OYcZyToytXipy8HduES',
    }
})