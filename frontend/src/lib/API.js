import axios from "axios";
import _cf from "../config/key"

const api = {
    apiHost: _cf.apiHost || ""
}

api.request = params => {
    const { method, url, data } = params;

    return new Promise((resolve, reject) => {
        const req = {
            method: method || "GET",
            url: `${ api.apiHost() }${ url }`,
            data
        };
        axios(req)
            .then(res => {
                if (res.status !== 200) {
                    // eslint-disable-next-line
                    throw { message: res.statusMessage };
                }
                resolve && resolve(res.data);
            })
            .catch (err => {
                reject && reject(err);
        });
    });
}

export default api;



