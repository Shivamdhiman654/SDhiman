import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Imag from './Imag'
import { NavLink, useNavigate } from 'react-router-dom'

const Home = () => {
    const login=useNavigate();
    const [inpval, setInput] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
        ,
    })
    const [data, setData] = useState([]);
    console.log(inpval);
    const getdata = (e) => {
        // console.log(e.target.value);
        const { value, name } = e.target;
        // console.log(value,name);
        setInput(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }
    const addData = (e) => {
        e.preventDefault();
        const { name, email, date, password } = inpval;
        if (name === "") {
            alert("Name is requred")
        } else if (email === "") {
            alert("Email is requred")
        } else if (!email.includes("@")) {
            alert("@ is requred")
        }
        else if (date === "") {
            alert("Date is requred")
        } else if (password === "") {
            alert("password is requred")
        } else if (password.length < 5) {
            alert("password length greatre 5")
        } else {
            localStorage.setItem("user", JSON.stringify([...data, inpval]));
            alert("User registration Successfully ")
            login("/login")
        }
    }
    return (
        <>
            <div className='container mt-3'>
                <section className='d-flex justify-content-between'>
                    <div className='left_data mt-5' style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-4'>Sign Up</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Full Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="text" name='email' onChange={getdata} placeholder="Enter Your Email" />

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="date" name='date' onChange={getdata} placeholder="Enter Date" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={addData} className="mb-3 col-lg-6" style={{ background: "rgb(67,185,127)" }}>
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have An Account <span><NavLink to="/login">SignIn</NavLink></span></p>
                    </div>
                    <Imag />
                </section>
            </div>
        </>
    )
}

export default Home