import React from "react";

import HeaderCartBtn from "./HeaderCartBtn";
import mealsImg from "../../../assets/food.jpg";
import classes from "./Header.module.css";

const Header = () => {
	return (
		<React.Fragment>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCartBtn>Cart</HeaderCartBtn>
			</header>
			<section className={classes["main-image"]}>
				<img src={mealsImg} />
			</section>
		</React.Fragment>
	);
};

export default Header;
