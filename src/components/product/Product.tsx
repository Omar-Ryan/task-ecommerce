import { Link } from "react-router-dom";
import { ProductProps } from "../../types/shared";
import styles from "./styles.module.css";
const { ProductBox, imgBox } = styles;

const Product = ({ title, image, price, id }: ProductProps) => {
  const truncateTitle = (title: string, maxLength: number) => {
    return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title;
  };
  return (
    <div className={ProductBox}>
      <Link to={`/product/${id}`}>
        <div className={imgBox}>
          <img
            // src="https://cdn-eu.dynamicyield.com/api/9876644/images/244c68ad42d8b__hp-w12-22032022-h_m-women_shirts-blouses.jpg"
            src={image}
            alt=""
            className="w-full"
          />
        </div>
        <h2>{truncateTitle(title, 10)}</h2>
        <h3>{price} EGP</h3>
        <button>Add to cart</button>
      </Link>
    </div>
  );
};

export default Product;
