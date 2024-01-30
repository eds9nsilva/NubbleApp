import axios from "axios";

export const api = axios.create({
    baseURL: 'http://127.0.0.1:3333/',
    timeout: 1200,
    headers: {
        Authorization: 'Bearer NA.jfirVTQkdrSV-tz2saUJfxKRRV70Vzu0m2faIsE2IrwoUwY_nJaHEi6Y9NLN',
    }
})