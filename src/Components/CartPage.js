// import React, { useState } from "react";
// import { Container, Row, Col, Button, Form } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function CartPage({ cart, setCart }) {
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     address: "",
//   });

//   // Group items in the cart by ID
//   const groupedCart = cart.reduce((acc, item) => {
//     const existingItem = acc.find((cartItem) => cartItem.id === item.id);
//     if (existingItem) {
//       existingItem.quantity += 1;
//       existingItem.totalPrice += item.price;
//     } else {
//       acc.push({
//         ...item,
//         quantity: 1,
//         totalPrice: item.price,
//       });
//     }
//     return acc;
//   }, []);

//   // Function to remove item from cart
//   const removeFromCart = (itemId) => {
//     setCart((prevCart) =>
//       prevCart.filter((item) => item.id !== itemId || item.quantity === 1)
//     );
//   };

//   // Handle form data change
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle order submission
//   const handleOrder = () => {
//     if (!formData.name || !formData.email || !formData.address) {
//       toast.error("Please fill all the fields before placing the order!", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//       });
//       return;
//     }

//     // Clear the cart and reset the form
//     setCart([]);
//     setShowForm(false);
//     setFormData({ name: "", email: "", address: "" });

//     toast.success("Your order has been placed successfully!", {
//       position: "top-right",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "colored",
//     });
//   };

//   // Calculate total price
//   const totalPrice = groupedCart.reduce(
//     (total, item) => total + item.totalPrice,
//     0
//   );

//   return (
//     <section className="cart_section">
//       <Container>
//         <Row>
//           <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
//             <h2>Your Cart</h2>
//             <p className="para">Review your selected items and proceed to checkout!</p>
//           </Col>
//         </Row>

//         {groupedCart.length > 0 ? (
//           <>
//             {!showForm ? (
//               <>
//                 <Row>
//                   {groupedCart.map((item, index) => (
//                     <Col key={index} md={4} lg={3} className="mb-4">
//                       <div className="card">
//                         <img src={item.image} alt={item.title} className="card-img-top" />
//                         <div className="card-body">
//                           <h5 className="card-title">{item.title}</h5>
//                           <p className="card-text">{item.paragraph}</p>
//                           <p className="price">
//                             ${item.totalPrice.toFixed(2)} ({item.quantity}x)
//                           </p>
//                           <Button variant="danger" onClick={() => removeFromCart(item.id)}>
//                             Remove
//                           </Button>
//                         </div>
//                       </div>
//                     </Col>
//                   ))}
//                 </Row>

//                 <Row className="mt-4">
//                   <Col className="text-center">
//                     <h4>Total: ${totalPrice.toFixed(2)}</h4>
//                     <Button
//                       variant="success"
//                       className="mx-2"
//                       onClick={() => setShowForm(true)}
//                     >
//                       Proceed to Checkout
//                     </Button>
//                     <Link to="/menu">
//                       <Button variant="secondary">Back to Menu</Button>
//                     </Link>
//                   </Col>
//                 </Row>
//               </>
//             ) : (
//               <Row className="mt-4">
//                 <Col lg={{ span: 6, offset: 3 }}>
//                   <h3 className="text-center mb-4">Enter Your Details</h3>
//                   <Form>
//                     <Form.Group className="mb-3">
//                       <Form.Label>Name</Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="name"
//                         placeholder="Enter your name"
//                         value={formData.name}
//                         onChange={handleChange}
//                       />
//                     </Form.Group>

//                     <Form.Group className="mb-3">
//                       <Form.Label>Email</Form.Label>
//                       <Form.Control
//                         type="email"
//                         name="email"
//                         placeholder="Enter your email"
//                         value={formData.email}
//                         onChange={handleChange}
//                       />
//                     </Form.Group>

//                     <Form.Group className="mb-3">
//                       <Form.Label>Address</Form.Label>
//                       <Form.Control
//                         as="textarea"
//                         rows={3}
//                         name="address"
//                         placeholder="Enter your address"
//                         value={formData.address}
//                         onChange={handleChange}
//                       />
//                     </Form.Group>

//                     <Button
//                       variant="primary"
//                       className="me-2"
//                       onClick={handleOrder}
//                     >
//                       Place Order
//                     </Button>
//                     <Button
//                       variant="secondary"
//                       onClick={() => setShowForm(false)}
//                     >
//                       Cancel
//                     </Button>
//                   </Form>
//                 </Col>
//               </Row>
//             )}
//           </>
//         ) : (
//           <Row>
//             <Col className="text-center">
//               <h4>Your cart is empty!</h4>
//               <Link to="/menu">
//                 <Button variant="primary" className="mt-3">
//                   Browse Menu
//                 </Button>
//               </Link>
//             </Col>
//           </Row>
//         )}
//         <ToastContainer />
//       </Container>
//     </section>
//   );
// }

// export default CartPage;

import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CartPage({ cart, setCart }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  // Group items in the cart by ID
  const groupedCart = cart.reduce((acc, item) => {
    const existingItem = acc.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.totalPrice += item.price;
    } else {
      acc.push({
        ...item,
        quantity: 1,
        totalPrice: item.price,
      });
    }
    return acc;
  }, []);

  // Function to increase quantity
  const increaseQuantity = (itemId) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const itemIndex = prevCart.findIndex((item) => item.id === itemId);
      updatedCart.push(prevCart[itemIndex]); // Adding another instance of the item
      return updatedCart;
    });
  };

  // Function to decrease quantity
  const decreaseQuantity = (itemId) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((item) => item.id === itemId);
      if (itemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart.splice(itemIndex, 1); // Removing one instance of the item
        return updatedCart;
      }
      return prevCart;
    });
  };

  // Handle form data change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle order submission
  const handleOrder = () => {
    if (!formData.name || !formData.email || !formData.address) {
      toast.error("Please fill all the fields before placing the order!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    // Clear the cart and reset the form
    setCart([]);
    setShowForm(false);
    setFormData({ name: "", email: "", address: "" });

    toast.success("Your order has been placed successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  // Calculate total price
  const totalPrice = groupedCart.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  return (
    <section className="cart_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>Your Cart</h2>
            <p className="para">Review your selected items and proceed to checkout!</p>
          </Col>
        </Row>

        {groupedCart.length > 0 ? (
          <>
            {!showForm ? (
              <>
                <Row>
                  {groupedCart.map((item, index) => (
                    <Col key={index} md={4} lg={3} className="mb-4">
                      <div className="card">
                        <img src={item.image} alt={item.title} className="card-img-top" />
                        <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-text">{item.paragraph}</p>
                          <p className="price">
                            ${item.totalPrice.toFixed(2)} ({item.quantity}x)
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() => decreaseQuantity(item.id)}
                            >
                              -
                            </Button>
                            <span>{item.quantity}</span>
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() => increaseQuantity(item.id)}
                            >
                              +
                            </Button>
                          </div>
                          <Button
                            variant="danger"
                            className="mt-2"
                            onClick={() => decreaseQuantity(item.id)}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>

                <Row className="mt-4">
                  <Col className="text-center">
                    <h4>Total: ${totalPrice.toFixed(2)}</h4>
                    <Button
                      variant="success"
                      className="mx-2"
                      onClick={() => setShowForm(true)}
                    >
                      Proceed to Checkout
                    </Button>
                    <Link to="/menu">
                      <Button variant="secondary">Back to Menu</Button>
                    </Link>
                  </Col>
                </Row>
              </>
            ) : (
              <Row className="mt-4">
                <Col lg={{ span: 6, offset: 3 }}>
                  <h3 className="text-center mb-4">Enter Your Details</h3>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="address"
                        placeholder="Enter your address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Button
                      variant="primary"
                      className="me-2"
                      onClick={handleOrder}
                    >
                      Place Order
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => setShowForm(false)}
                    >
                      Cancel
                    </Button>
                  </Form>
                </Col>
              </Row>
            )}
          </>
        ) : (
          <Row>
            <Col className="text-center">
              <h4>Your cart is empty!</h4>
              <Link to="/menu">
                <Button variant="primary" className="mt-3">
                  Browse Menu
                </Button>
              </Link>
            </Col>
          </Row>
        )}
        <ToastContainer />
      </Container>
    </section>
  );
}

export default CartPage;
