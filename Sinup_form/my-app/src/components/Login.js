import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Imag from './Imag'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const details = useNavigate();
    const [inpval, setInput] = useState({
        email: "",
        password: "",
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
        const getuserArr = localStorage.getItem("user");
        console.log(getuserArr);
        const { email, password } = inpval;
        if (email === "") {
            alert("Email is requred")
        } else if (!email.includes("@")) {
            alert("@ is requred")
        } else if (password === "") {
            alert("password is requred")
        } else if (password.length < 5) {
            alert("password length greatre 5")
        } else {
            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, i) => {
                    return el.email === email && el.password === password
                });
                if (userlogin.length == 0) {
                    alert('User not valid')
                } else {
                    console.log("Sucess");
                    localStorage.setItem("user_login", JSON.stringify(getuserArr));
                    details("/userdata");
                }
                // console.log(userlogin);
            }

        }
    }
    return (
        <>
            <div className='container mt-3'>
                <section className='d-flex justify-content-between'>
                    <div className='left_data mt-5' style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-4'>Sign IN</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="text" name='email' onChange={getdata} placeholder="Enter Your Email" />

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
                    </div>
                    <Imag />
                </section>
            </div>
        </>
    )
}

export default Login