import React, { useState, useRef } from 'react'
import '../form.css'


import { BsFillPeopleFill, BsFillShieldFill, BsLockFill } from 'react-icons/bs'
import { MdAlternateEmail } from 'react-icons/md'

import StyleContextProvider from '../context/Style'
import UserContextProvider from '../context/UserContext'




function Form() {
    const { user, setUser, submitCredentials, loginUser, getOTP, resetValues } = UserContextProvider();
    const { check } = StyleContextProvider();
    const [confirmPass, setConfirmPass] = useState("");
    const [country, setCountry] = useState("+92");

    const clear = () => {
        setConfirmPass("");
        setCountry("+92");
    }

    const loginButtonRef = useRef();
    const signupButtonRef = useRef();
    const forgetButtonRef = useRef();


    //! handling input fields
    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name)
        console.log(value)
        if (name === "confirmPassword") {
            setConfirmPass(value)
        } else if (name === "country") {
            setCountry(value)
            setUser(prevValue => {
                return {...prevValue, phone: ""}
            })
        }
        setUser(prevValue => {
            return { ...prevValue, [name]: value }
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        // console.log(event.nativeEvent.submitter.name)
        // console.log(user)
        const action = event.nativeEvent.submitter.name

        if (action === "signup") {
            if (user.password === confirmPass) {
                submitCredentials(user, country)
                resetValues()
                clear()
            } else {
                alert("Passwords do not match")
            }
        } else if (action === "forgetPass") {
            getOTP();
        } 
        else {
            loginUser(user)
            resetValues()
            clear()
        }
    }
    
    return (
        <div className=''>

            {/* <form onSubmit={(event)=> {event.preventDefault(); handleSubmit(event);}} className="form "> */}
            <form className="form" onSubmit={(event) => {handleSubmit(event)}}>
                <p className=' font-bold tracking-widest ' id="heading">{check ? "Login" : "Sign Up"}</p>
                {/* //! Inputs // */}
                <div className="field">
                    <MdAlternateEmail size={19} />
                    <input autoComplete="off" placeholder="Email" className="input-field" type="email" name='email' value={user.email} onChange={handleChange} required />
                </div>
                <div className="field">
                    <BsLockFill size={19} />
                    <input minLength={6} placeholder="Password" className="input-field" type="password" name='password' value={user.password} onChange={handleChange} required />
                </div>
                {!check && (<>
                    <div className="field">
                        <BsFillShieldFill size={19} />
                        <input minLength={6} placeholder="Confirm Password" className="input-field" name='confirmPassword' value={confirmPass} type="password" onChange={handleChange} required />
                    </div>
                    <div className="field">
                        <BsFillPeopleFill size={20}/>
                        <select name="type"value={user.type} onChange={handleChange}  className='w-full  text-[#6B7280] rounded-sm' required>
                            <option value='' className='font-semibold'>Select</option>
                            <option value="seller">Seller</option>
                            <option value="buyer">Buyer</option>
                        </select>
                    </div>
                    <div className="field">
                        {/* <BsFillTelephoneFill size={19}/> */}
                        <select className=' text-gray-600 rounded-sm' name="country" value={country} onChange={handleChange}>
                            <option value="+92">🇵🇰 (+92)</option>
                            <option value="+1">🇺🇸 (+1)</option>
                            <option value="+44">🇬🇧 (+44)</option>
                            <option value="+81">🇯🇵 (+81)</option>
                            {/* Add more countries as needed */}
                        </select>
                        <input placeholder="Phone Number" className="input-field" name="phone" value={user.phone} pattern="\d{10}" type="text" onChange={handleChange} required />
                    </div>

                </>
                )}

                <div className='btn-section'>
                    {/* //! Login button */}
                    {check && <div className="btn">
                        <button  name="login" type='submit' className="button1">Login</button>
                    </div>}
                    {/* //! SignUp button */}
                    {!check && <div className="btn">
                        <button  name="signup" type='submit' className="button1">Sign Up</button>
                    </div>}
                    <div className='btn'>
                        {check && (<button  name='forgetPass' type='submit' className="button3">Forgot Password</button>)}
                    </div>

                </div>
            </form>
        </div>
    )
}

export default Form