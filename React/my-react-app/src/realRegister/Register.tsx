import axios from "axios";
import React, { useState } from "react";

interface RegisterType{
    userId : string,
    password : string
}


function Register () {
    const [register, setRegister] = useState<RegisterType>({
        userId : '',
        password : ''
})

const registerSubmit = async (e : React.FormEvent) => {
    e.preventDefault()

    try{
        const response = await axios.post('http://localhost:8080/register', register);
        console.log('등록성공')

}
    catch(err){
        console.log('등록 오류', err)
    }


}


    return (
        <div>
            <h1>Register!!</h1>
            <form>
            <input
            type="text"
            value={register.userId}
            onChange={(e)=>setRegister({...register, userId: e.target.value})}
            placeholder="아이디"/>
            <input
            type="password"
            value={register.password}
            onChange={(e)=>setRegister({...register, password: e.target.value})}
            placeholder="비밀번호"/>
            <button
            type='submit'>회원 등록</button>
            </form>
            <hr></hr>
        </div>
    )
}

export default Register