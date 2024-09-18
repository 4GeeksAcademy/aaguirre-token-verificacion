import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import '../../styles/index.css'

export const SignUp = () => {
    return (
        <div >
            <div className='AddPerson-Form' >
                <div className='AddPerson-Form-Group'>
                    <label htmlFor='name'>Email</label>
                    <input
                        //value={email}
                        //onChange={handleChange}
                        //type='text'
                        //name='email'
                        //id='name'
                    />
                </div>
                <div className='AddPerson-Form-Group'>
                    <label htmlFor='jobTitle'>password</label>
                    <input
                        //value={password}
                        //onChange={handleChange}
                        //type='text'
                        //name='password'
                       // id='password'
                    />
                </div>
                <button className='AddPerson-form-button' type='submit'>
                    Sing up
                </button>
            </div>
        </div>
    )
}
