import React from 'react';
import {PropTypes} from 'prop-types';
const CarMenu = ({ cars, onMenuItemClick }) => {

    return (
        <div className="dropdown">
            <div className="dropdown-content">
            {cars.map(car => {
                    return <div key={car.id} value={car.id} onClick={()=> onMenuItemClick(car.id)}>{car.model}</div>
                })
            }
            </div>
        </div>
    )
}

CarMenu.propTypes = {
    cars: PropTypes.array,
    onMenuItemClick: PropTypes.func
};

export default CarMenu;