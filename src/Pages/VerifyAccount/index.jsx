import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom'
import Button from "@mui/material/Button"
import {  CgLogIn } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";
import OtpVerification from "../../Components/OtpBox/index2";



const VerifyAccount = () => {
    const handleOtpComplete = (otp) => {
    console.log("OTP Entered:", otp);
    // Here you can verify OTP using API
    alert(`OTP Submitted: ${otp}`);
    }
    return (
        <>
            <section className="bg-white] w-full h-[100vh]">
                <header className="w-full fixed top-0 left-0 px-4 py-3 flex items-center justify-between z-50">

                    <Link to="/">
                    <img src="/img.jpg" className="m-auto" />
                    </Link>


                    <div className="flex items-center gap-0">
                        <NavLink
                            to="/verify-account"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "opacity-50"
                                    : isActive
                                        ? "bg-[#e8e8e8] rounded-full"
                                        : ""
                            }>
                            <Button className="!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-2">
                                <CgLogIn className="text-[18px]" />Log In
                            </Button>
                        </NavLink>


                        <NavLink
                            to="/sign-up"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "opacity-50"
                                    : isActive
                                        ? "bg-[#e8e8e8] rounded-full"
                                        : ""
                            }>
                            <Button className="!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-2"><FaRegUserCircle className="text-[16px]" />Sign Up
                            </Button>
                        </NavLink>

                    </div>
                </header>

                <img src="https://fullstack-ecommerce-add-admin.netlify.app/static/media/pattern.df9a7a28fc13484d1013.webp" className="w-full fixed top-0 left-0 opacity-15" />

                <div className="loginBox card w-[600px] h-auto pb-20 mx-auto pt-20 relative z-50">
                    <div className="text-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/3329/3329139.png " className="w-[80px] m-auto"></img>
                        
                    </div>


                    <h1 className="text-center text-[35px] font-[800] mt-4">Welcome Back!<br />Please Verify your Account.</h1>

                    <br />
                    <p className="text-center text-[15px]">OTP send to &nbsp;<span className="text-blue-500 font-bold">badal454157@gmail.com</span></p>
                    
                    <br />

                    <div className="w-full flex items-center justify-center gap-3 mt-3">
                        <span className="flex items-center w-[100px] h-[2px] bg-[rgba(0,0,0,0.2)]"></span>
                        <span className="text-[14px] font-[500]">Or, Please Verify your Email</span>
                        <span className="flex items-center w-[100px] h-[2px] bg-[rgba(0,0,0,0.2)]"></span>
                    </div>

                    <br/>
                      
                      <div className="text-center flex items-center justify-center flex-col">
                            <OtpVerification length={6} onComplete={handleOtpComplete}/>
                      </div>

                        <br/>
                       <div className="w-[300px] m-auto">
                         <Button className="btn-blue w-full">Verify OTP</Button>
                       </div>
                    </div>
            </section>
        </>
    )
}

export default VerifyAccount;

