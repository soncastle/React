import React from 'react';
import logo from './logo.svg';
import './App.css';
import Order from './Order';
import { All } from './All'; // All 타입을 import
import Get from './Get';
// { orderNumber, id, product, price }: props 객체에서 해당 속성들을 직접 추출하여 각각의 변수로 사용할 수 있게 해주는 구조 분해 할당 구문입니다.
// {} 없이 사용하면 props.orderNumber, props.id처럼 매번 props를 통해 접근해야 합니다.
const Purchase: All = {
  orderNumber: 5,
  id: 'ssh',
  product: 'product!!',
  price: 1000
};

function App() {
  return (
    <div>
      <div>
        <h2>주문 리스트</h2>
        <table>
          <thead>
            <tr>
              <th>주문번호</th>
              <th>회원정보</th>
              <th>주문정보</th>
              <th>구매상품</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Order/></td>
              <td><input type='text' /></td>
              <td><input type='text' /></td>
              <td><input type='text' /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='gg'>쿠폰</div>      
      <hr/>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <Get/>
    </div>
  );
}

export default App;
