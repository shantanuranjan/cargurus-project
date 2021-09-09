import initialState from './initialState';

export default function carReducer(state = initialState, action) {
    switch(action.type) {
        case "FETCH_CARS":{
            return {...state, fetching: true}
        }
        case "FETCH_CARS_FULLFILLED": {
            return Object.assign({}, state, {fetched: true, fetching: false, ...action.cars});
        }
        case "FETCH_CARS_REJECTED":
            return Object.assign({},state, {fetching: false, ...action.error});
    }

    return state;
}