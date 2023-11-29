import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { Link } from 'react-router-dom';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    

  return (
    <div className="subtotal">
        <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      {/* <Link to="/payment"> */}
      <button className='babi'>Proceed to Checkout</button>
      {/* </Link> */}
    </div>
  )
};

export default Subtotal;