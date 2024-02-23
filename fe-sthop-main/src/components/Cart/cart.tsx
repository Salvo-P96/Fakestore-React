import React, {useState, useEffect} from 'react'
import "./cart.css"


type CartProps = {
    totQuantity: number;
    totPrice: number;
}
const Cart = ({ totQuantity, totPrice }: CartProps) => {
    const [quantity, setQuantity] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);



    return (
        <div>
            <div className="cartBlock">
                <button type="button" className="cart"><img src="./cart.svg" alt="" className="cartIco" /></button>
                <div className={`crtQuantity ${totQuantity === 0 ? 'hidden' : ""}`}>{totQuantity}</div>
            </div>
                <div className={`totPrice ${totPrice === 0 ? 'hidden' : 'totPrice'}`}>{totPrice.toFixed(2)}€</div>
        </div>
    )
}

export default Cart
