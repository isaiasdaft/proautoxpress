import React from "react";
import { Navigate } from "react-router-dom";
import { HashRouter as Router, Route, Routes} from "react-router-dom";

const PrivateRoute = ({ component:Component, ...rest }) => {

    return(
        <Router>
            <Routes>
        <Route {...rest}>{localStorage.getItem('user-info')? <Component/>:<Navigate to = "Login"/> }</Route >
             </Routes>
        </Router>
    );
};
export default PrivateRoute;