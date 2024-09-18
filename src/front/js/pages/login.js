import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import '../../styles/login.css'

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div classNameName="container">
			<div className="login">
				<div className="login-screen">
					<div className="app-title">
						<h1>Login</h1>
					</div>

					<div className="login-form">
						<div className="control-group">
							<input type="text" className="login-field" value="" placeholder="email" id="login-name"/>
								<label className="login-field-icon fui-user" for="login-name"></label>
						</div>

						<div className="control-group">
							<input type="password" className="login-field" value="" placeholder="password" id="login-pass"/>
								<label className="login-field-icon fui-lock" for="login-pass"></label>
						</div>

						<a className="btn btn-primary btn-large btn-block" href="#">login</a>
						<a className="login-link" href="#">Lost your password?</a>
					</div>
				</div>
			</div>
			<Link to="/">
				<button classNameName="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
