import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return(
    <div>
        <h1>Home</h1>
        <Link to="/">홈</Link>
        <Link to="/page-one">gg</Link>
    </div>
    );
}


export default Home;