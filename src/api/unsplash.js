import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com/search/photos',
    headers:{
        Authorization :'Client-ID b1ab9a74d343ca1ecf3160aab315424150d4c3a2dabbf9465ce199a4c78b5313',

    }
});