import { Link } from "react-router-dom";
import styles from "./styles.module.css";
const { category, categoryImg, categoryTitle } = styles;

const Category = () => {
  return (
    <div className={category}>
      <Link to="">
        <div className={categoryImg}>
          <img
            src="https://cdn-eu.dynamicyield.com/api/9876644/images/244c68ad42d8b__hp-w12-22032022-h_m-women_shirts-blouses.jpg"
            alt=""
            className="w-full"
          />
        </div>
        <h3 className={categoryTitle}>men</h3>
      </Link>
    </div>
  );
};

export default Category;
