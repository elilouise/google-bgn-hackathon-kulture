import { useNavigate } from "react-router-dom";
import styles from "./FoodListItem.module.css";

import JapaneseFoodPlace from "./japanese-food-place.png";
function FoodListItem() {
  const navigate = useNavigate();
  return (
    <div className={styles.main}>
      <div className={styles.leftSection}>
        <img src={JapaneseFoodPlace} alt="" />
      </div>
      <div className={styles.rightSection}>
        <h2>Japanese - Osaka Hills</h2>
        <p>Location: King's Cross London</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          necessitatibus ab similique modi, facilis blanditiis, temporibus eius
          assumenda optio ea odio mollitia laudantium facere pariatur magnam
          quam? In, assumenda nam. Lorem ipsum dolor sit amet consectetur
        </p>
        <div className={styles.rightSectionLeft}>
          <button onClick={() => navigate("/mainApp/foodDisplay")}>
            Find out more
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodListItem;
