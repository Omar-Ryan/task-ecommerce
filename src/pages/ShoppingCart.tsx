import { useAppDispatch, useAppSelector } from "../store/hooks";
import { ProductProps } from "../types/shared";
import { removeFromCart } from "../store/cart/cartSlice";
import { Button, Container, Row, Col } from "react-bootstrap";

const ShoppingCart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const products = useAppSelector((state) => state.products.records);

  const cartProducts = products.filter((product: ProductProps) =>
    cartItems[product.id] ? true : false
  );

  const totalPrice = cartProducts.reduce(
    (total, product) => total + product.price * cartItems[product.id],
    0
  );

  const handleRemove = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <Container>
      <h2 className="mb-4">Shopping Cart</h2>
      {cartProducts.length > 0 ? (
        <div>
          {cartProducts.map((product: ProductProps) => (
            <Row
              key={product.id}
              className="align-items-center justify-content-around mb-3"
            >
              <Col xs={4}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ height: "200px", width: "200px" }}
                  title={product.title}
                />
              </Col>
              <Col
                xs={8}
                className="d-sm-flex flex-column flex-md-row justify-content-center align-items-center "
              >
                <Col xs={4}>
                  <p>{product.price} EGP</p>
                </Col>
                <Col xs={4}>
                  <p>Quantity: {cartItems[product.id]}</p>
                </Col>
                <Col xs={4}>
                  <Button
                    variant="danger"
                    onClick={() => handleRemove(product.id)}
                  >
                    Remove
                  </Button>
                </Col>
              </Col>
            </Row>
          ))}
          <Row className="mt-5 mb-3">
            <Col>
              <h3 style={{ textAlign: "center" }}>
                Total Price: {totalPrice.toFixed(2)} EGP
              </h3>
            </Col>
          </Row>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </Container>
  );
};

export default ShoppingCart;
