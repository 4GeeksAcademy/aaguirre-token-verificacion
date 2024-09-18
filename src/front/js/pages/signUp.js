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
							<input 
                                type="text" 
                                className="login-field" 
                                value="" 
                                placeholder="email" 
                                id="signUp-email"
                               // value={email}
                               // onChange={handleChange}
                            />
								
						</div>

						<div className="control-group">
							<input 
                                type="password" 
                                className="signUp-field" 
                                value="" 
                                placeholder="password" 
                                id="SignUp-pass"
                                //value={password}
                                //onChange={handleChange}

                            />
								
						</div>

						<button className="btn btn-primary btn-large btn-block" href="#">login</button>
						<button className="signUp-link" href="#">Lost your password?</button> 
                        
					</div>
				</div>
			</div>
			<Link to="/">
				<button classNameName="btn btn-primary">Back home</button>
			</Link>
		</div>
    )
}
