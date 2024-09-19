import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const Private = ()=>{

    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/login')
        }
    },[])
    return ( 
        <div>HOLA</div>
    )
}