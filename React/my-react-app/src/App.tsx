import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Order from './Order';
import { All } from './All'; // All 타입을 import
import Get from './Get';
import axios from 'axios';
import RegisterList from './register/RegisterList';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import PageOne from './Components/PageOne';
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

  const [refresh, setRefresh] = useState<boolean>(false); //false니까 boolean으로 자동추론됨!

  const handleSumbit = async (e: React.FormEvent) => {
    e.preventDefault(); // 새로고침 방지!! 리액트는 SPA(Single Page Appalication)!!
    try {
      const response = await axios.post('http://localhost:8080/register', register);
      console.log('응답데이터:', response.data);
      setRefresh(prev => !prev);
    } catch (err){
      console.error('에러발생:', err);
    }
  };


  return (
    <div>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/page-one" element={<PageOne/>} />
        </Routes>
        <hr/>
<Link to="/">gg</Link>
<hr/>
        </BrowserRouter>


      </div>
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
      <RegisterList refresh={refresh}/>
    </div>
  );
}

export default App;
