import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import '../../styles/signUp.css'

export const SignUp = () => {
    return (
        <div classNameName="container">
			<div className="signUp">
				<div className="signUp_screen">
					<div className="app-title">
						<h1>SignUp</h1>
					</div>

					<div className="signUp-form">
						<div className="control-group">
							<input type="text" className="login-field" value="" placeholder="email" id="login-name"/>
								
						</div>

						<div className="control-group">
							<input type="password" className="login-field" value="" placeholder="password" id="login-pass"/>
								
						</div>

						<a className="btn btn-primary btn-large btn-block" href="#">login</a>
						<a className="signUp-link" href="#">Lost your password?</a>
					</div>
				</div>
			</div>
			<Link to="/">
				<button classNameName="btn btn-primary">Back home</button>
			</Link>
		</div>
    )
}
