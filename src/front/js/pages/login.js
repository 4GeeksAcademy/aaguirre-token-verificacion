import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import '../../styles/login.css'

export const Login = () => {
	const { store, actions } = useContext(Context);

	const [data, setData] = useState({})
	const handlechange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value })
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('URL',process.env.BACKEND_URL + "/api/login")
		fetch(process.env.BACKEND_URL + "/api/login", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json"
			}

		})
			.then(response => response.json())
			.then(data => {
				localStorage.setItem("token",data.token)
			})
	}

	return (
		<div className="container">
			<div className="login">
				<div className="login-screen">
					<div className="app-title">
						<h1>Login</h1>
					</div>

					<div className="login-form">
						<div className="control-group">
							<input
								type="text"
								className="login-field"
								placeholder="email"
								id="login-name"
								name="email"
								onChange={(e) => handlechange(e)}
							/>
							<label className="login-field-icon fui-user" htmlFor="login-name"></label>
						</div>

						<div className="control-group">
							<input
								type="password"
								className="login-field"
								placeholder="password"
								id="login-pass"
								name="password"
								onChange={(e) => handlechange(e)}
							/>
							<label className="login-field-icon fui-lock" htmlFor="login-pass"></label>
						</div>

						<button className="btn btn-primary btn-large btn-block" onClick={handleSubmit} >login</button>
						<a className="login-link" href="#">Lost your password?</a>
					</div>
				</div>
			</div>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
