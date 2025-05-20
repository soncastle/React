import axios from "axios";
import React, { useEffect, useState } from "react";

type User = {
    id: number,
    userId: string,
    password: string
}

function RegisterList(){
    const [members, setMembers] = useState<User[]>([])
    
  useEffect(() => {
    axios.get<User[]>('http://localhost:8080/registerList')
      .then((res) => {
        setMembers(res.data);
      })
      .catch((err) => {
        console.error('회원 불러오기 실패:', err);
      });
  }, []);


  return (
    <div>
      <h3>회원 리스트</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.userId}</td>
              <td>{member.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default RegisterList