import React, { useState } from "react";
import { All } from "./All";

// interface AllProps extends All{
// }

const Purchase:All = {
    orderNumber: 5,
    id: 'sshㅁㄴㄷㄹㄷ',
    product: 'product!!',
    price: 1000
}

// function Order<All>(){

// }

// function Order(props: All){ -> 모든 객체를 넘겨준다면 가능?
// function Order({props} : {props: All}){ -> 이렇게 하면 인자가 필요!! Order에서 <Order {...props}/> 이렇게 적어주면 가능!
// function Order({orderNumber, id, product, price}: All){ -> 이렇게 하면 사용하려는 곳에서 인자값이 필요함!!
function Order(){
    // const [myPurchase, setMyPurchase] = useState<All>(Purchase)

    return(
        // <div className="Purchase">
        //     <input type="text" value={props.orderNumber}/>
        //     <input type="text" value={props.id}/>
        //     <input type="text" value={props.product}/>
        //     <input type="text" value={props.price}/>
        // </div>
        // <div className="gg">
        //     <input type="text" value={orderNumber}/>
        //     <input type="text" value={id}/>
        //     <input type="text" value={product}/>
        //     <input type="text" value={price}/>
        // </div>
           <div className="Purchase">
      <input type="text" value={Purchase.orderNumber} readOnly />
      <input type="text" value={Purchase.id} readOnly />
      <input type="text" value={Purchase.product} readOnly />
      <input type="text" value={Purchase.price} readOnly />
    </div>
    );
}

export default Order