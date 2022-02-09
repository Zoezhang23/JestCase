import axios from 'axios'

export const callBacks = (fn) => {
    fn('abc');
}
export const callClassObject = (ClassItem) => {
    new ClassItem();
}

export const fetchData = () => {
    return axios.get('/hello').then(res => res.data);
}