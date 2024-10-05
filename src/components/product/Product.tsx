import { Link } from "react-router-dom";
import { ProductProps } from "../../types/shared";
import styles from "./styles.module.css";
import { useAppDispatch } from "../../store/hooks";
import { addToCart } from "../../store/cart/cartSlice";
import { Button } from "react-bootstrap";
const { ProductBox, imgBox } = styles;

const Product = ({ title, image, price, id }: ProductProps) => {
  const truncateTitle = (title: string, maxLength: number) => {
    return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title;
  };

  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(id));
  };

  return (
    <div className={ProductBox} title={title}>
      <Link to={`/product/${id}`}>
        <div className={imgBox}>
          <img src={image} alt={title} className="w-full" />
        </div>
        <h2>{truncateTitle(title, 10)}</h2>
        <h3>{price} EGP</h3>
      </Link>
      <Button onClick={handleAddToCart} variant="primary">
        Add to Cart
      </Button>
    </div>
  );
};

export default Product;
