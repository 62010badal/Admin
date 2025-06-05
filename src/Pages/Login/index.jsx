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


const Login = () => {
    const [isPasswordShow, setisPasswordShow] = useState(false);
    const [loadingGoogle, setLoadingGoogle] = useState(false);
    const [loadingFacebook, setLoadingFacebook] = useState(false);

    function handleGoogleClick() {
        setLoadingGoogle(true);
        setTimeout(() => setLoadingGoogle(false), 2000);
    }

    function handleFacebookClick() {
        setLoadingFacebook(true);
        setTimeout(() => setLoadingFacebook(false), 2000);
    }

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


                    <h1 className="text-center text-[35px] font-[800] mt-4">Welcome Back!<br />Sign in with your credentials.</h1>

                    <div className="flex items-center justify-center w-full mt-5 gap-6">
                        <LoadingButton
                            size="small"
                            onClick={handleGoogleClick}
                            endIcon={<FcGoogle className="!text-[22px]" />}
                            loading={loadingGoogle}
                            loadingPosition="end"
                            variant="outlined"
                            className="!bg-none !font-[500] !text-[15px] !text-[rgba(0,0,0,0.7)] !capitalize !px-5 !border !border-[#000] hover:!border-blue-500 !py-2"
                        >
                            <span>Signin with Google</span>
                        </LoadingButton>


                        <LoadingButton
                            size="small"
                            onClick={handleFacebookClick}
                            endIcon={<FaFacebook className="!text-[24px]" />}
                            loading={loadingFacebook}
                            loadingPosition="end"
                            variant="outlined"
                            className="!bg-none !font-[500] !text-[15px] !text-[rgba(0,0,0,0.7)] !capitalize !px-5 !border !border-[#000] hover:!border-blue-500 !py-2"
                        >
                            Signin with Facebook
                        </LoadingButton>
                    </div>

                    <br />

                    <div className="w-full flex items-center justify-center gap-3 mt-3">
                        <span className="flex items-center w-[100px] h-[2px] bg-[rgba(0,0,0,0.2)]"></span>
                        <span className="text-[14px] font-[500]">Or, Sign in with your email</span>
                        <span className="flex items-center w-[100px] h-[2px] bg-[rgba(0,0,0,0.2)]"></span>
                    </div>

                    <form className="w-full px-8">
                        <div className="form-group mb-4 w-full">
                            <h4 className="text-[14px] font-[500] mb-1">Email</h4>
                            <input type="email" className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3" placeholder="Enter your email"/>
                        </div>

                        <div className="form-group mb-4 w-full">
                            <h4 className="text-[14px] font-[500] mb-1">password</h4>

                            <div className="relative w-full">
                                <input 
                                type={isPasswordShow===true ? "password" : "text"}
                                 className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3" placeholder="Enter your password"/>

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



                        <div className="form-group mb-4 w-full flex items-center justify-between">
                            <FormControlLabel required control={<Checkbox />} label="Remember Me" />

                            <Link to="/forgot-password" className="text-blue-600 font-[700] text-[15px] hover:underline hover:text-gray-600">Forgot Password ?</Link>
                        </div>



                        <Link to="/sign-up"> 
                        <Button className="btn-blue btn-lg w-full">Sign In</Button>
                        </Link>

                    </form>

                </div>
            </section>
        </>
    )
}

export default Login;