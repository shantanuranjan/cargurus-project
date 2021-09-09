import 'whatwg-fetch';
import CarService from '../services/CarService';


function fetchCarSuccess(data) {
    return {type:'FETCH_CARS_FULLFILLED', cars:data};
}

function fetchCarFailure(data) {
    return {type:'FETCH_CARS_REJECTED', error:err};
}

export function fetchCars() {
    return function(dispatch) {
        return CarService.fetchCars()
            .then((response) => {
                return response;
            })
            .then((data) => {
                dispatch(fetchCarSuccess(data));
            })
            .catch((err) => {
                dispatch(fetchCarFailure(err));
        })
    }
}