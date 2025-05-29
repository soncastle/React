import React, { useEffect, useState } from "react";
import Register from "./Register";
import RegisterList from "./RegisterList";
import axios from "axios";
interface RegisterType {
    userId : string,
    password : string
}

function RegisterPage () {
    const [member, setMembers] = useState<RegisterType>({
        userId : '',
        password : ''
    });

    const refreshResult = async () => {
        const res = await axios.post('http://localhost:8080/register')
    }
 const onSuccessRefresh = () => {
    }
    useEffect(() => {refreshResult()}, [onSuccessRefresh]);

   
    
    return(
        <div>
            <Register onSuccess={onSuccessRefresh}/>
            냡냡!!!
        </div>
    )
}

export default RegisterPage