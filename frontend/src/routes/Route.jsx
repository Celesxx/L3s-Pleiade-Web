import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react"
import Index from "../components/pages/index";
import Login from "../components/pages/login";
import TableData from "../components/pages/tableData";
import TableUser from "../components/pages/tableUser";
import Graph from "../components/pages/graph";
import ProtectedRoute from "./protected.route"

function IndexRoute()
{

    return(

        <Router>
            <ProtectedRoute path="/" exact component={Index}></ProtectedRoute>
            <Route path="/login" exact component={Login}></Route>
            <ProtectedRoute path="/tableData" exact component={TableData}></ProtectedRoute>
            <ProtectedRoute path="/TableUser" exact component={TableUser}></ProtectedRoute>
            <ProtectedRoute path="/Graph" exact component={Graph}></ProtectedRoute>
        </Router>
    );
}

export default IndexRoute;
