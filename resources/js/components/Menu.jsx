import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route, } from "react-router-dom";


import Login from './auth/Login';
import Register from './auth/Register';

import HomePage from './HomePage'

import RegisterUser from './user/RegisterUser';
import ShowUser from './user/ShowUser';

import ShowCustomer from './customer/ShowCustomer'
import EditCustomer from './customer/EditCustomer'
import CreateCustomer from './customer/CreateCustomer'

import ShowStore from './store/ShowStore'
import EditStore from './store/EditStore';
import CreateStore from './store/CreateStore';

import ShowCategory from './category/ShowCategory';
import EditCategory from './category/EditCategory';
import CreateCategory from './category/CreateCategory';

import ShowBrand from './brand/ShowBrand';
import CreateBrand from './brand/CreateBrand';
import EditBrand from './brand/EditBrand';

import ShowProduct from './product/ShowProduct';
import CreateProduct from './product/CreateProduct';
import EditProduct from './product/EditProduct';

import ShowEmployee from './Employee/ShowEmployee';
import EditEmployee from './Employee/EditEmployee';
import CreateEmployee from './Employee/CreateEmployee';

import ShowNotes from './invoice/ShowNotes';
import EditNotes from './invoice/EditNotes';
import CreateNotes from './invoice/CreateNotes';

import Navigation from './Nav';
import PrivateRoute from './PrivateRoute';




const Menu = () => {
    return (
        <Router>
            <Fragment>
            <div>
            <Navigation/>
                <Routes>

                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/Register" element={<Register />} />          

                </Routes>
            </div>
            </Fragment>
        </Router>
    )
}
export default Menu

if (document.getElementById('aplication')) {
    ReactDOM.render(<Menu />, document.getElementById('aplication'));
}

