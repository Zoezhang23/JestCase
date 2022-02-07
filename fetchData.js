//test aynconised
import axios from 'axios';

export const fetchData = (fn) => {
    axios.get('http://localhost:3000/profile').then((response) => { fn(response.data) })
}
//return promise type data
export const fetchData1 = () => {
    return axios.get('http://localhost:3000/profile');
}
//catch error testing

export const fetchData2 = () => {
    return axios.get('http://localhost:3000/profile1');
}
export const fetchData3 = () => {
    return axios.get('http://localhost:3000/profile');
}
