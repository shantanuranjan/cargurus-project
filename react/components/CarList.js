import React, { Fragment } from 'react';
import {PropTypes} from 'prop-types';
const CarList = ({ searchedCar }) => {
    console.log(searchedCar);
    return (
        <Fragment>
            {searchedCar.photo_urls.map(photo => {
                return (
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-4">
                                    <img src={photo} className="imgResize" alt="car-image"/>
                                </div>
                                <div className="col-sm-8">
                                    <div className="row">
                                        <div className="col-sm-8" style={{ paddingLeft: '50px' }}>{searchedCar.model}</div>
                                        <div className="col-sm-4">{searchedCar.mileage}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               )
            })}
        </Fragment>
    )
}

CarList.propTypes = {
    searchedCar: PropTypes.object
};

export default CarList;