import React, { useEffect, useState } from "react";
import Register from "../register/Register";
import axios from "axios";

interface User{
    id: number,
    userId: string,
    password: string
}

function RegisterList () {
    const [list, setList] = useState<User[]>([])

    useEffect(()=>{
        axios.get<User[]>('http://localhost:8080/registerList')
        .then((res)=>{
            setList(res.data);
        })
        .catch((err) => {
                console.log('회원 불러오기 실패', err);
        });
    },[]);


    return(
        <div>
            <h1>RegisterList!!</h1>
            <hr/>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>userId</th>
                        <th>password</th>
                    </tr>
                    </thead>
                    <tbody>
                        {list.map((list) => (
                            <tr key={list.id}>
                                <td>{list.id}</td>
                                <td>{list.userId}</td>
                                <td>{list.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RegisterList