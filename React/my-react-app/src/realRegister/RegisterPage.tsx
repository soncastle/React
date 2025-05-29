import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Register from "./Register";
import RegisterList from "./RegisterList";
function RegisterPage () {
    return (
        <div>
            <h1>RegisterPage</h1>
            <hr></hr>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register/>}/>
            </Routes>
            <Routes>
                <Route path="/" element={<RegisterList/>}/>
            </Routes>
            <Link to={"/"}>HOME</Link>
            <hr/>
            <Link to={"/RegisterList"}>RegisterList</Link>
            </BrowserRouter>
        </div>
    )
}

export default RegisterPage