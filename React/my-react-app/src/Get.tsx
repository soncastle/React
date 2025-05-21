import React, { useEffect, useState } from "react";
import axios from 'axios';

function Get(){
    const [data, setData] = useState<string>('')
    
useEffect(() => {
    axios.get('http://localhost:8080/api/data')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
}, []);


    return (
        <div>
            받아온 값 : {data}
        </div>
    )
}

export default Get