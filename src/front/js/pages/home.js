import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="home_principal text-center mt-5">
			<h1 className="bienvenida">Welcome to the website!!</h1>
			
		</div>
	);
};
