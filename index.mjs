import axios from 'axios';

async function intraRoute(start, end, options = {
    excludeModes: [],
    type: 'json',
    useCors: true
}) {
    let url = `https://api.felineholdings.com/intraroute?start=${start}&end=${end}&type=${options.returnType}`;
    if (options.useCors) {
        url = `https://cors.felineholdings.com/?${url}`;
    }

    let response = await axios.post(url, {
        excludeModes: options.excludeModes
    })

    return response;
}

intraRoute('airATC', 'omegaKIT', {
    useCors: false
});

export default intraRoute;