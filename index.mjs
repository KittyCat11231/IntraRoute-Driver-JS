import axios from 'axios';

const intraRoute = {
    findRoute: async (start, end, options = {
        excludeModes: [],
        type: 'json',
        useCors: true
    }) => {
        try {
            let url = `https://api.felineholdings.com/intraroute?start=${start}&end=${end}&type=${options.returnType}`;
            if (options.useCors || options.useCors === undefined) {
                url = `https://cors.felineholdings.com/?${url}`;
            }
        
            let response = await axios.post(url, {
                excludeModes: options.excludeModes
            })
    
            return response.data;
        } catch (error) {
            console.error(error);
            return(error);
        }
    },
    getStopsList: async (options = {
        excludeModes: [],
        useCors: true
    }) => {
        try {
            let url = `https://api.felineholdings.com/intraroute/stops-list`;
            if (options.useCors || options.useCors === undefined) {
                url = `https://cors.felineholdings.com/?${url}`;
            }
        
            let response = await axios.post(url, {
                excludeModes: options.excludeModes
            })
    
            return response.data;
        } catch (error) {
            console.error(error);
            return(error);
        }
    }
}

export default intraRoute;