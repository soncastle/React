import React, { useEffect, useState } from "react";
import Register from "./Register";
import RegisterList from "./RegisterList";
interface RegisterType {
    userId : string,
    password : string
}

function RegisterPage () {
    const [member, setMembers] = useState<RegisterType[]>([]);

    const RefreshResult() => {
        
    }

    useEffect(() => {refreshResult()}, []);

    const onSuccessRefresh = () => {
        
    }
    
    return(
        <div>
            <Register onSuccess={}/>
        </div>
    )
}

export default RegisterPage