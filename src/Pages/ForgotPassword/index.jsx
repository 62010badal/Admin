import { Link, NavLink } from 'react-router-dom'
import Button from "@mui/material/Button"
import { FaRegUserCircle } from "react-icons/fa";
import {  CgLogIn } from "react-icons/cg";



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const ForgotPassword = () => {
    return (
        <>
            <section className="bg-white w-full h-[100vh]">
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


                    <h1 className="text-center text-[35px] font-[800] mt-4">Having trouble to sign in?<br />Reset your password.</h1>


                    <form className="w-full px-8">
                        <div className="form-group mb-4 w-full">
                            <h4 className="text-[14px] font-[500] mb-1">Email</h4>
                            <input type="email" className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3 " placeholder="Enter your email"/>
                        </div>


                        <Link to="/verify-account">
                            <Button className="btn-blue btn-lg w-full" >Reset Password</Button>
                        </Link>

                        <br/><br/>
                        <div className="text-center  flex items-center justify-center gap-4" >
                            <span>Don’t want to reset? </span>
                            <Link to="/login" className="text-blue-600 font-[700] text-[15px] hover:underline hover:text-gray-600">Sign In</Link>
                        </div>

                    </form>

                </div>
            </section>
        </>
    )
}

export default ForgotPassword;