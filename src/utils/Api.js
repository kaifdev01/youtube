import axios from "axios";
const baseUrl = 'https://youtube138.p.rapidapi.com'

// const apikey = process.env.REACT_APP_YT_API_KEY
const options = {
    params: {
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'X-RapidAPI-Key': '6d8b168385msh4922a21f0e53e23p13fc64jsncfa4c57554b4',
        // 'X-RapidAPI-Key': apikey,
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchDataApi = async (url) => {
    const { data } = await axios.get(`${baseUrl}/${url}`, options)
    return data;
}  