import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signup.css";

const SignUp = () => {
	const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleInputEmail (event) {
        setEmail(event.target.value); // captura el email que escribe el usuario
    }

    function handleInputPassword (event) {
        setPassword(event.target.value); // captura la contraseña que escribe el usuario
    }

    async function handleSubmit(event) {
        event.preventDefault()
        //console.log(actions.response.data)
        let newUser = await actions.signup(email, password);
        if (newUser === true) {
            //alert(actions.response.data.msg)
            navigate("/login")
        }
    }

	return (
		<div className="container d-flex align-items-center justify-content-center">
            <div className="d-flex justify-content-center" id="form_cont">
            
            <form onSubmit={handleSubmit}>
            <h1 className="mb-5">Sign Up</h1>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input onChange={handleInputEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@example.com"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input onChange={handleInputPassword}type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" class="btn btn-primary">Sign Up</button>
                <div id="emailHelp" class="form-text">Already have an account? <Link to={"/login"}>Login.</Link></div>
                </form>
            </div>
        </div>
	);
};
export default SignUp;