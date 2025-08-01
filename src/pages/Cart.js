import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBIcon,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("{{base_url}}user/cart")
      .then(response => {
        setCartItems(response.data.cart);
        setCartTotal(response.data.total);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
        const fakeData = {
          cart: [
            {_id: '1', count: 2},
            {_id: '2', count: 3},
            {_id: '3', count: 1},
          ],
          total: 123.45
        };
        setCartItems(fakeData.cart);
        setCartTotal(fakeData.total);
      });
  }, []);

  const handleEmptyCart = () => {
    axios.delete("{{base_url}}user/cart")
      .then(response => {
        setCartItems([]);
        setCartTotal(0);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleCashOrder = () => {
    axios.post("{{base_url}}user/cart/cash-order", { COD: true })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Sorry, an error occurred: {error.message}</p>;
  }

  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol>
          <h1 className="mb-4">Cart</h1>
          <MDBCard className="mb-4">
            <MDBCardBody>
              <MDBTable responsive striped bordered>
                <MDBTableHead>
                  <tr>
                    <th>ID</th>
                    <th>Count</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {cartItems.map(item => (
                    <tr key={item._id}>
                      <td>{item._id}</td>
                      <td>{item.count}</td>
                    </tr>
                  ))}
                </MDBTableBody>
              </MDBTable>
              <div className="d-flex justify-content-between align-items-center mt-4">
                <MDBBtn color="danger" onClick={handleEmptyCart}>
                  Empty Cart
                  <MDBIcon fas icon="trash-alt" className="ms-2" />
                </MDBBtn>
                <MDBBtn color="success" onClick={handleCashOrder}>
                  Cash Order
                  <MDBIcon fas icon="check" className="ms-2" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Cart;
