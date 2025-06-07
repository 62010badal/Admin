import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom'
import Button from "@mui/material/Button"
import { CgAbstract, CgLogIn } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { LoadingButton } from "@mui/lab";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FaRegEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const ChangePassword = () => {
    const [isPasswordShow, setisPasswordShow] = useState(false);
    const [isPasswordShow2, setisPasswordShow2] = useState(false);
   

    return (
        <>
            <section className="bg-white w-full">
                <header className="w-full fixed top-0 left-0 px-4 py-3 flex items-center justify-between z-50">

                    <Link to="/"><img src="/img.jpg" alt="Logo" className="w-[200px] "></img>
                    </Link>


                    <div className="flex items-center gap-0">
                        <NavLink
                            to="/login"
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
                        <img src="/icon1.png" className="m-auto" />
                    </div>


                    <h1 className="text-center text-[35px] font-[800] mt-4">Welcome Back!<br />You can change your password from here .</h1>

                    

                    <br />

                    

                    <form className="w-full px-8">
                    
                        <div className="form-group mb-4 w-full">
                            <h4 className="text-[14px] font-[500] mb-1">New Password</h4>

                            <div className="relative w-full">
                                <input 
                                type={isPasswordShow===true ? "password" : "text"}
                                 className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3" placeholder="New Password"/>

                                <Button className="!absolute top-[7px] right-[15px] z-50 !rounded-full !w-[40px] !h-[40px] !min-w-[40px] !text-gray-600" onClick={() => setisPasswordShow(!isPasswordShow)}>
                                    {
                                        isPasswordShow===false ? (
                                        <FaRegEye className="text-[18px] " /> ) :
                                        (
                                        <FaEyeSlash  className="text-[18px] " />
                                    )}
                                    </Button>
                            </div>
                        </div>

                        <div className="form-group mb-4 w-full">
                            <h4 className="text-[14px] font-[500] mb-1">Confirm Password</h4>

                            <div className="relative w-full">
                                <input 
                                type={isPasswordShow2===true ? "password" : "text"}
                                 className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3" placeholder="Confirm Password"/>

                                <Button className="!absolute top-[7px] right-[15px] z-50 !rounded-full !w-[40px] !h-[40px] !min-w-[40px] !text-gray-600" onClick={() => setisPasswordShow2(!isPasswordShow2)}>
                                    {
                                        isPasswordShow2===false ? (
                                        <FaRegEye className="text-[18px] " /> ) :
                                        (
                                        <FaEyeSlash  className="text-[18px] " />
                                    )}
                                    </Button>
                            </div>
                        </div>



                        



                        <Link to="/"> 
                        <Button className="btn-blue btn-lg w-full">Change Password</Button>
                        </Link>

                    </form>

                </div>
            </section>
        </>
    )
}

export default ChangePassword;