const API_KEY = '694e371ab89a183eb5f6f3da5220ac647b272077';
const BASE_URL = 'https://api.nomics.com/v1';

const basicFetch = async (endpoint ) => {
    const req = await fetch(`${BASE_URL}${endpoint}`)
    const json = await req.json();
    return json; 
}

export default {
    getCriptosInfo: async () => {
        let info = {}
        info = await basicFetch(`/currencies/ticker?key=${API_KEY}&interval=1d,30d&convert=EUR&per-page=100&page=1`);
        return info
    }
}