import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const emailRef = useRef(null);
    const [password, setPwd] = useState("");
    const pwdRef = useRef(null);
    const navigate = useNavigate();

    const handleLogin = () => {
        if(email === 'admin@gmail.com' && password === 'admin1234'){
            localStorage.setItem("isLoggedIn", "true");
            alert('Login Success')
            navigate('/admin')
        }else{
            localStorage.setItem("isLoggedIn", "false");
            alert("Wrong email or password");
        }
    }

    useEffect(() => {
        console.log("Login updated");
        return () => {
            console.log("Login Cleanup")
        }
    }, [email, password]);

    useEffect(() => {
        emailRef.current.focus();
    }, [])

  return (
    <>
        <h1>Login Here</h1>
        <form action="" className='login'>
            <input type="email"
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={emailRef}
            autoComplete='none' />   

            <input type="password"
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPwd(e.target.value)}
            ref={pwdRef}
            autoComplete='new-password' />       

            <button onClick={handleLogin}>Login</button>  
        </form>
    </>
  )
}

export default Login