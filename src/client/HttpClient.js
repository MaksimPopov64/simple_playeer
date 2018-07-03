import axios from 'axios';


export class HTTPClient {

    getData = (search) => {
    const apikey = 'AIzaSyAw3zkUJ1FuAFxMup3THuzep_dWFhkmluw';
    const url = `https://www.googleapis.com/youtube/v3/search?part=id,snippet&maxResults=10&key=${apikey}&q=${search}&alt=json`;
    return axios.get(url, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            withCredentials: true,
            credentials: 'same-origin',})
            .then(res => res.data.items);
    }
}

export const httpClient = new HTTPClient();

