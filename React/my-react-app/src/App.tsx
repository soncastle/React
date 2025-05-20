import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Order from './Order';
import { All } from './All'; // All 타입을 import
import Get from './Get';
import axios from 'axios';
import RegisterList from './registerList';
// { orderNumber, id, product, price }: props 객체에서 해당 속성들을 직접 추출하여 각각의 변수로 사용할 수 있게 해주는 구조 분해 할당 구문입니다.
// {} 없이 사용하면 props.orderNumber, props.id처럼 매번 props를 통해 접근해야 합니다.
const Purchase: All = {
  orderNumber: 5,
  id: 'ssh',
  product: 'product!!',
  price: 1000
};

type RegisterForm = {
  userId: string;
  password: string
}

function App() {
  const [register, setRegister] = useState<RegisterForm>({
    userId: '' ,
    password: ''
  });

  const handleSumbit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/register', register);
      console.log('응답데이터:', response.data);
    } catch (err){
      console.error('에러발생:', err);
    }
  };


  return (
    <div>
        <form onSubmit={handleSumbit}>
      <div>
        <h2>회원가입</h2>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>pw</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input
        type="text"
        value={register.userId}
        onChange={(e) => setRegister({ ...register, userId: e.target.value })}
        placeholder="아이디"
      /></td>
              <td><input
        type="password"
        value={register.password}
        onChange={(e) => setRegister({ ...register, password: e.target.value })}
        placeholder="비밀번호"
      /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <button type='submit'>회원 등록</button>
</form>
      <hr/>
      <div>회원 리스트</div>
      <Get/>
      <RegisterList/>
    </div>
  );
}

export default App;
