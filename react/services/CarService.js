import 'whatwg-fetch';

export default class CarService {

    static fetchCars() {
         return fetch('http://localhost:5000/api', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
            return data;
        }).catch((err) => {
            return err;
        })
    }
}