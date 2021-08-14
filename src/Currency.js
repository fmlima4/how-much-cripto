const BASE_URL = 'https://economia.awesomeapi.com.br/json/';

const basicFetch = async (endpoint ) => {
    const req = await fetch(`${BASE_URL}${endpoint}`)
    const json = await req.json();
    return json; 
}

const Currency = {
    getCurrencyInfo: async () => {
        let info = {}
        info = await basicFetch(`last/USD-BRL,EUR-BRL,BTC-BRL`);
        return info
    },

    format: async (value) => {
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          });
        
        return formatter.format(value);
    }

}

export default Currency;
