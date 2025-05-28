import axios from "axios";
import React, { ReactElement, useEffect, useState } from "react";

interface RegisterType {
    userId : string,
    password : string
}


function Register({onSuccess} : {onSuccess : () => void}) {
    const [register, setRegister] = useState<RegisterType>({
        userId : '',
        password : ''
    });

const registerSubmit = async (e : React.FormEvent) => {
e.preventDefault();
const [reftesh, setRefresh] = useState<boolean>(false);

try {
    const response = await axios.post('http://localhost:8080/register', register);
    console.log('등록 성공');
    // setRefresh(prve => !prve);
    onSuccess();
}
    catch(err){console.log('등록 오류', err)};
};


return(
        <div>
<input
type="text"
value={register.userId}
onChange={(e) => setRegister({...register, userId: e.target.value})}
placeholder="아이디"/>
<input
type="password"
value={register.password}
onChange={(e) => setRegister({...register, password: e.target.value})}
placeholder="비밀번호"/>
        </div>




)



}




export default Register