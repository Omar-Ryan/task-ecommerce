import styles from "./styles.module.css";
const { mainBox, imgBox } = styles;

const Product = () => {
  return (
    <div className={mainBox}>
      <div className={imgBox}>
        <img
          src="https://cdn-eu.dynamicyield.com/api/9876644/images/244c68ad42d8b__hp-w12-22032022-h_m-women_shirts-blouses.jpg"
          alt=""
          className="w-full"
        />
      </div>
      <h2>men</h2>
      <h3>33 EGP</h3>
      <button>Add to card</button>
    </div>
  );
};

export default Product;
