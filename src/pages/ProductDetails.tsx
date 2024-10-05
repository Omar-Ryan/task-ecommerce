import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useParams } from "react-router-dom";
import { actGetProductDetails } from "../store/product/productsSlice";
import { Spinner, Alert, Button } from "react-bootstrap";
import { addToCart } from "../store/cart/cartSlice";

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { loading, productDetails, error } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (id) {
      dispatch(actGetProductDetails(parseInt(id)));
    }
  }, [id, dispatch]);

  const handleAddToCart = () => {
    if (productDetails) {
      dispatch(addToCart(productDetails.id));
    }
  };

  if (loading === "pending") {
    return <Spinner animation="border" />;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  if (!productDetails) {
    return <p>No product details found.</p>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={productDetails.image}
            alt={productDetails.title}
            className="img-fluid h-75"
          />
        </div>
        <div className="col-md-6">
          <h1>{productDetails.title}</h1>
          <p>{productDetails.description}</p>
          <h2>{productDetails.price} EGP</h2>
          <Button onClick={handleAddToCart} variant="primary">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
