import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import * as carActions from '../actions/carActions';

import CarMenu from './CarMenu';
import CarList from './CarList';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cars:[],
            searchedCar: {}
        };

        this.onSearchCar = this.onSearchCar.bind(this);
        this.onBlurCar = this.onBlurCar.bind(this);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
    }

    componentDidMount() {
        this.props.carActions.fetchCars();
    }

    onSearchCar = (e) => {
        const { carsRecord } = this.props;
        let carsArray = [];
        const searchName = e.target.value.toLowerCase();
        carsArray = carsRecord.records.filter(car => car.body_type.toLowerCase().indexOf(searchName) !== -1 ||
            car.make.toLowerCase().indexOf(searchName) !== -1 || car.model.toLowerCase().indexOf(searchName) !== -1);
        this.setState({ cars: carsArray});
    }

    onBlurCar = () => {
        this.setState({ cars: []});
    }

    onMenuItemClick = (id) => {
        console.log('shantanu');
        console.log(id);
        const { carsRecord } = this.props;
        let searchedCar = {};
        searchedCar = carsRecord.records.find(car => car.id === id);
        console.log('shantanu');
        console.log(searchedCar);
        this.setState({ searchedCar, cars: [] });
    }

    render() {
        const { cars, searchedCar } = this.state;
        return (
            <div >
                <nav className="navbar navbar-inverse">
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <a className="navbar-brand" href="#">BI Model</a>
                    </div>
                    <ul className="nav navbar-nav">
                      <li className="active"><a href="#">Home</a></li>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Contact</a></li>
                      <li><a href="#">Customers</a></li>
                    </ul>
                  </div>
                </nav>
				<div className="container">
                    <div className="panel-group">
                        <div className="panel panel-primary">
                            <div className="panel-heading">Search Box</div>
                            <div className="panel-body">
                             <fieldset>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <label>Search</label>
                                    </div>
                                    <div className="col-sm-9">
                                        <input type="text" list="users" name="users"
                                                placeholder="Search by make, model, body type"
                                                onChange={this.onSearchCar}
                                                className="form-control" autoFocus/>
                                        {cars.length > 0 && <CarMenu cars={cars} onMenuItemClick={this.onMenuItemClick}/>}
                                    </div>
                                </div>
                             </fieldset>
                            </div>
                        </div>
                    </div>
                    {Object.keys(searchedCar).length > 0 && <CarList searchedCar={searchedCar}/>}
                </div>
                <footer className="footer">
                  <p>Posted by: Shantanu Ranjan</p>
                  <p>Contact information: <a href="mailto:shantanuranjan3@gmail.com">shantanuranjan3@gmail.com</a>.</p>
                </footer>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        carsRecord: state.cars
    }
}

function mapDispatchToProps(dispatch) {
    return {
        carActions:bindActionCreators(carActions, dispatch)
    }
}

App.propTypes = {
    cars: PropTypes.array,
    carActions: PropTypes.object
};




export default connect(mapStateToProps, mapDispatchToProps)(App);