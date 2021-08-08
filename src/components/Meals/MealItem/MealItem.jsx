import React from "react";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

const MealItem = ({ title, description, price, id }) => {
  const displayPrice = `$ ${price.toFixed(2)}`
  return (
    <li className={classes.meal}>
      <div>
        <h3>{title}</h3>
        <p className={classes.description}>{description}</p>
        <p className={classes.price}>{displayPrice}</p>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
   );
}
 
export default MealItem;