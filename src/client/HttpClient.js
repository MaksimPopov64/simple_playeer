import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
const token ='AIzaSyAw3zkUJ1FuAFxMup3THuzep_dWFhkmluw';
export const HTTPClient = () => {

   let  mock = new MockAdapter(axios);
    mock.onGet('/users').reply(200, {
    users: [
        { id: 1, name: 'John Smith' }
        ]
});

axios.get('/users')
    .then(function(response) {
        console.log(response.data);
    });

};

fetchVideos(direction) {
    this.setState({
        loading: true,
    });

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=${apikey}&q=music&alt=json`;
    axios.get(url)
        .then(res => {
            this.setState({
                videos: res.data.items,
                loading: false,
            });
        })
        .catch(error => {
            console.log(error);
        });
}


