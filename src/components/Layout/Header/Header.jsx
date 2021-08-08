import React from "react";

import mealsImg from "../../../assets/meals.jpeg";
import classes from "./Header.module.css";

const Header = () => {
	return (
		<React.Fragment>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<button>Cart</button>
			</header>
			<section className={classes["main-image"]}>
				<img src={mealsImg} />
			</section>
		</React.Fragment>
	);
};

export default Header;
