import React, { useState, PureComponent, useContext } from "react";
import DashboardBoxes from "../DashboardBoxes";
import { PiHandWaving } from "react-icons/pi";
import { Button } from "@mui/material";
import { FaPlus } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import Badge from "../../Components/Badge"
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import ProgressBar from "../../Components/ProgressBar";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Pagination from '@mui/material/Pagination';
import Table1 from "../../Components/CSS Tables";

//Material UI Tables
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { BiExport } from "react-icons/bi";

// Chart
import Chart from "../../Components/Chart";
import { MyContext } from "../../App";






const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const Dashboard = () => {

    const context = useContext(MyContext)

    const [categoryFilterVal, setCategoryFilterVal] = useState('');

    const handleChangeCatFilter = (event) => {
        setCategoryFilterVal(event.target.value);
    }

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    // 

    const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null);

    const isShowOrderProducts = (index) => {
        if (isOpenOrderProduct === index) {
            setIsOpenOrderProduct(null);
        }
        else {
            setIsOpenOrderProduct(index);
        }

    }



    return (
        <>
            <div className="w-full py-2 px-5 bg-[#f1faff] border border-[rgba(0,0,0,0.1)] flex items-center gap-8 mb-5 justify-between">
                <div className="info">
                    <h1 className="text-[35px] leading-10 font-bold mb-3">
                        Good Morning,
                        <div className="flex items-center gap-2">
                            Cameron
                            <PiHandWaving className="text-[30px] text-yellow-300" />
                        </div>
                    </h1>
                    <p className="text-[14px]">Here’s What happening on your store today. See the statistics at once.</p>

                    <br />

                    <Button className="btn-blue !capitalize" onClick={() => context.setIsOpenFullScreenPanel({
                                        open:true,
                                        model:"Add Product"
                                    })}><FaPlus /> Add prodcut</Button>
                </div>

                <div className="img flex items-center justify-end w-full">
                    <img src="https://isomorphic-furyroad.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshop-illustration.b3542492.png&w=3840&q=75" className="w-[250px] mr-8">
                    </img>
                </div>
            </div>

            <DashboardBoxes />


            <div className="card px-4 pb-4 my-4 shadow-md sm:rounded-lg bg-white">
                <div className="flex items-center justify-between px-5 py-5">
                    <h2 className="text-[18px] font-[600]">Products {" "}  <span className="font-[400] text-[14px]">(Tailwind CSS Table)</span></h2>
                </div>

                <div className="flex items-center w-full pl-5 justify-between pr-14">
                    <div className="col w-[20%]">
                        <h4 className="font-[600] text-[13px]">Category By</h4>
                        <div className="mb-3 pt-4">

                            <Select
                                className="w-full"
                                size="small"
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={categoryFilterVal}
                                onChange={handleChangeCatFilter}
                                label="Category"
                            >
                                <MenuItem value={''}>All</MenuItem>
                                <MenuItem value={10}>Men</MenuItem>
                                <MenuItem value={20}>Women</MenuItem>
                                <MenuItem value={30}>Kids</MenuItem>
                            </Select>



                        </div>
                    </div>


                    <div className="col w-[30%] ml-auto flex items-center  gap-3">
                        <Button className="btn btn-sm !bg-green-600 !text-white items-center"><BiExport className="mr-4 text-[25px]" />Export</Button>
                        <Button className="btn-blue btn-sm !bg-green-600 !text-white" onClick={() => context.setIsOpenFullScreenPanel({
                                        open:true,
                                        model:"Add Product"
                                    })}><FaPlus className="mr-4 text-[25px]" />Add Product</Button>
                    </div>
                </div>


                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-0 pb-2">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr className="bg-gray-200">

                                <th scope="col" className="px-2 py-2 w-[3%]">
                                    <div className="w-[40px]">
                                        <Checkbox {...label} />
                                    </div>
                                </th>

                                <th scope="col" className="px-2 py-3 whitespace-nowrap">PRODUCT</th>

                                <th scope="col" className="px-6 py-3 whitespace-nowrap">CATEGORY</th>

                                <th scope="col" className="px-6 py-3 whitespace-nowrap">SUB CATEGORY</th>



                                <th scope="col" className="px-6 py-3 whitespace-nowrap">PRICE</th>

                                <th scope="col" className="px-6 py-3 whitespace-nowrap">Sales</th>

                                <th scope="col" className="px-6 py-3 whitespace-nowrap">ACTION</th>


                            </tr>
                        </thead>
                        <tbody>

                            {/* 1st Product */}

                            <tr className="odd:bg-white even:bg-gray-50  border-b border-gray-200">
                                <td className="px-2 py-2">

                                    <div className="w-[60px]">
                                        <Checkbox {...label} size="small" />
                                    </div>
                                </td>


                                <td className="px-2 py-2 ">
                                    <div className="flex items-center gap-4 w-[200px]">
                                        <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                                            <Link to="/product/457581">
                                                <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp" className="w-full group-hover:scale-105 transition-all" />
                                            </Link>
                                        </div>

                                        <div className="info w-[70%]">
                                            <h3 className="font-[600] text-[12px] leading-5 hover:text-blue-600">
                                                <Link to="/product/457581">
                                                    Electronic Rubber Table </Link></h3>

                                            <span>Books</span>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-6 py-2 ">
                                    Electronics
                                </td>

                                <td className="px-6 py-2 ">
                                    Women
                                </td>



                                <td className="px-6 py-2 ">
                                    <div className="flex gap-1 mt-4 flex-col">
                                        <span className="oldPrice line-through text-gray-500 text-[14px] leading-3 font-[600]">$58.00</span>

                                        <span className="price text-[14px] text-primary font-[600]">$50.00</span>
                                    </div>

                                </td>

                                <td className="px-6 py-2 ">
                                    <p className="text-[14px] w-[100px] mb-2"><span className="font-[600]">234 </span>Sale</p>
                                    <ProgressBar value={50} type="success" />
                                </td>

                                <td className="px-6 py-2 ">
                                    <div className="flex w-full items-center gap-4">



                                        <Tooltip title="Edit Product" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.5)] !rounded-full hover:!bg-[#ccc]">
                                                <AiOutlineEdit className="text-[20px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>




                                        <Tooltip title="View Product Details" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.5)] !rounded-full hover:!bg-[#ccc]">
                                                <FaRegEye className="text-[20px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>


                                        <Tooltip title="Remove Product" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.5)] !rounded-full hover:!bg-[#ccc]">
                                                <FaRegTrashAlt className="text-[20px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>




                                    </div>
                                </td>

                            </tr>



                            {/* 2nd */}


                            <tr className="odd:bg-white even:bg-gray-50  border-b border-gray-200">
                                <td className="px-2 py-2">

                                    <div className="w-[60px]">
                                        <Checkbox {...label} size="small" />
                                    </div>
                                </td>


                                <td className="px-2 py-2 ">
                                    <div className="flex items-center gap-4 w-[200px]">
                                        <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                                            <Link to="/product/457581">
                                                <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp" className="w-full group-hover:scale-105 transition-all" />
                                            </Link>
                                        </div>

                                        <div className="info w-[70%]">
                                            <h3 className="font-[600] text-[12px] leading-5 hover:text-blue-600">
                                                <Link to="/product/457581">
                                                    Electronic Rubber Table </Link></h3>

                                            <span>Books</span>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-6 py-2 ">
                                    Electronics
                                </td>

                                <td className="px-6 py-2 ">
                                    Women
                                </td>



                                <td className="px-6 py-2 ">
                                    <div className="flex gap-1 mt-4 flex-col">
                                        <span className="oldPrice line-through text-gray-500 text-[14px] leading-3 font-[600]">$58.00</span>

                                        <span className="price text-[14px] text-primary font-[600]">$50.00</span>
                                    </div>

                                </td>

                                <td className="px-6 py-2 ">
                                    <p className="text-[14px] w-[100px] mb-2"><span className="font-[600]">234 </span>Sale</p>
                                    <ProgressBar value={40} type="error" />
                                </td>

                                <td className="px-6 py-2 ">
                                    <div className="flex w-full items-center gap-4">



                                        <Tooltip title="Edit Product" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.5)] !rounded-full hover:!bg-[#ccc]">
                                                <AiOutlineEdit className="text-[20px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>




                                        <Tooltip title="View Product Details" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.5)] !rounded-full hover:!bg-[#ccc]">
                                                <FaRegEye className="text-[20px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>


                                        <Tooltip title="Remove Product" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.5)] !rounded-full hover:!bg-[#ccc]">
                                                <FaRegTrashAlt className="text-[20px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>




                                    </div>
                                </td>

                            </tr>


                            {/* 3rd */}
                            <tr className="odd:bg-white even:bg-gray-50  border-b border-gray-200">
                                <td className="px-2 py-2">

                                    <div className="w-[60px]">
                                        <Checkbox {...label} size="small" />
                                    </div>
                                </td>


                                <td className="px-2 py-2 ">
                                    <div className="flex items-center gap-4 w-[200px]">
                                        <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                                            <Link to="/product/457581">
                                                <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp" className="w-full group-hover:scale-105 transition-all" />
                                            </Link>
                                        </div>

                                        <div className="info w-[70%]">
                                            <h3 className="font-[600] text-[12px] leading-5 hover:text-blue-600">
                                                <Link to="/product/457581">
                                                    Electronic Rubber Table </Link></h3>

                                            <span>Books</span>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-6 py-2 ">
                                    Electronics
                                </td>

                                <td className="px-6 py-2 ">
                                    Women
                                </td>



                                <td className="px-6 py-2 ">
                                    <div className="flex gap-1 mt-4 flex-col">
                                        <span className="oldPrice line-through text-gray-500 text-[14px] leading-3 font-[600]">$58.00</span>

                                        <span className="price text-[14px] text-primary font-[600]">$50.00</span>
                                    </div>

                                </td>

                                <td className="px-6 py-2 ">
                                    <p className="text-[14px] w-[100px] mb-2"><span className="font-[600]">234 </span>Sale</p>
                                    <ProgressBar value={50} type="yellow" />
                                </td>

                                <td className="px-6 py-2 ">
                                    <div className="flex w-full items-center gap-4">



                                        <Tooltip title="Edit Product" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.5)] !rounded-full hover:!bg-[#ccc]">
                                                <AiOutlineEdit className="text-[20px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>




                                        <Tooltip title="View Product Details" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.5)] !rounded-full hover:!bg-[#ccc]">
                                                <FaRegEye className="text-[20px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>


                                        <Tooltip title="Remove Product" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.5)] !rounded-full hover:!bg-[#ccc]">
                                                <FaRegTrashAlt className="text-[20px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>




                                    </div>
                                </td>
                            </tr>


                            {/* 4th */}
                            <tr className="odd:bg-white even:bg-gray-50  border-b border-gray-200">
                                <td className="px-2 py-2">

                                    <div className="w-[60px]">
                                        <Checkbox {...label} size="small" />
                                    </div>
                                </td>


                                <td className="px-2 py-2 ">
                                    <div className="flex items-center gap-4 w-[200px]">
                                        <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                                            <Link to="/product/457581">
                                                <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp" className="w-full group-hover:scale-105 transition-all" />
                                            </Link>
                                        </div>

                                        <div className="info w-[70%]">
                                            <h3 className="font-[600] text-[12px] leading-5 hover:text-blue-600">
                                                <Link to="/product/457581">
                                                    Electronic Rubber Table </Link></h3>

                                            <span>Books</span>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-6 py-2 ">
                                    Electronics
                                </td>

                                <td className="px-6 py-2 ">
                                    Women
                                </td>



                                <td className="px-6 py-2 ">
                                    <div className="flex gap-1 mt-4 flex-col">
                                        <span className="oldPrice line-through text-gray-500 text-[14px] leading-3 font-[600]">$58.00</span>

                                        <span className="price text-[14px] text-primary font-[600]">$50.00</span>
                                    </div>

                                </td>

                                <td className="px-6 py-2 ">
                                    <p className="text-[14px] w-[100px] mb-2"><span className="font-[600]">234 </span>Sale</p>
                                    <ProgressBar value={50} type="success" />
                                </td>

                                <td className="px-6 py-2 ">
                                    <div className="flex w-full items-center gap-4">



                                        <Tooltip title="Edit Product" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.5)] !rounded-full hover:!bg-[#ccc]">
                                                <AiOutlineEdit className="text-[20px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>




                                        <Tooltip title="View Product Details" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.5)] !rounded-full hover:!bg-[#ccc]">
                                                <FaRegEye className="text-[20px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>


                                        <Tooltip title="Remove Product" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.5)] !rounded-full hover:!bg-[#ccc]">
                                                <FaRegTrashAlt className="text-[20px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>




                                    </div>
                                </td>

                            </tr>


                            <tr className="odd:bg-white even:bg-gray-50  border-b border-gray-200">
                                <td className="px-2 py-2">

                                    <div className="w-[60px]">
                                        <Checkbox {...label} size="small" />
                                    </div>
                                </td>


                                <td className="px-2 py-2 ">
                                    <div className="flex items-center gap-4 w-[200px]">
                                        <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                                            <Link to="/product/457581">
                                                <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp" className="w-full group-hover:scale-105 transition-all" />
                                            </Link>
                                        </div>

                                        <div className="info w-[70%]">
                                            <h3 className="font-[600] text-[12px] leading-5 hover:text-blue-600">
                                                <Link to="/product/457581">
                                                    Electronic Rubber Table </Link></h3>

                                            <span>Books</span>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-6 py-2 ">
                                    Electronics
                                </td>

                                <td className="px-6 py-2 ">
                                    Women
                                </td>



                                <td className="px-6 py-2 ">
                                    <div className="flex gap-1 mt-4 flex-col">
                                        <span className="oldPrice line-through text-gray-500 text-[14px] leading-3 font-[600]">$58.00</span>

                                        <span className="price text-[14px] text-primary font-[600]">$50.00</span>
                                    </div>

                                </td>

                                <td className="px-6 py-2 ">
                                    <p className="text-[14px] w-[100px] mb-2"><span className="font-[600]">234 </span>Sale</p>
                                    <ProgressBar value={50} type="yellow" />
                                </td>

                                <td className="px-6 py-2 ">
                                    <div className="flex w-full items-center gap-4">



                                        <Tooltip title="Edit Product" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.5)] !rounded-full hover:!bg-[#ccc]">
                                                <AiOutlineEdit className="text-[20px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>




                                        <Tooltip title="View Product Details" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.5)] !rounded-full hover:!bg-[#ccc]">
                                                <FaRegEye className="text-[20px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>


                                        <Tooltip title="Remove Product" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.5)] !rounded-full hover:!bg-[#ccc]">
                                                <FaRegTrashAlt className="text-[20px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>




                                    </div>
                                </td>

                            </tr>



                            {/* 2nd */}


                            <tr className="odd:bg-white even:bg-gray-50  border-b border-gray-200">
                                <td className="px-2 py-2">

                                    <div className="w-[60px]">
                                        <Checkbox {...label} size="small" />
                                    </div>
                                </td>


                                <td className="px-2 py-2 ">
                                    <div className="flex items-center gap-4 w-[200px]">
                                        <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                                            <Link to="/product/457581">
                                                <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp" className="w-full group-hover:scale-105 transition-all" />
                                            </Link>
                                        </div>

                                        <div className="info w-[70%]">
                                            <h3 className="font-[600] text-[12px] leading-5 hover:text-blue-600">
                                                <Link to="/product/457581">
                                                    Electronic Rubber Table </Link></h3>

                                            <span>Books</span>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-6 py-2 ">
                                    Electronics
                                </td>

                                <td className="px-6 py-2 ">
                                    Women
                                </td>



                                <td className="px-6 py-2 ">
                                    <div className="flex gap-1 mt-4 flex-col">
                                        <span className="oldPrice line-through text-gray-500 text-[14px] leading-3 font-[600]">$58.00</span>

                                        <span className="price text-[14px] text-primary font-[600]">$50.00</span>
                                    </div>

                                </td>

                                <td className="px-6 py-2 ">
                                    <p className="text-[14px] w-[100px] mb-2"><span className="font-[600]">234 </span>Sale</p>
                                    <ProgressBar value={50} type="success" />
                                </td>

                                <td className="px-6 py-2 ">
                                    <div className="flex w-full items-center gap-4">



                                        <Tooltip title="Edit Product" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.5)] !rounded-full hover:!bg-[#ccc]">
                                                <AiOutlineEdit className="text-[20px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>




                                        <Tooltip title="View Product Details" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.5)] !rounded-full hover:!bg-[#ccc]">
                                                <FaRegEye className="text-[20px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>


                                        <Tooltip title="Remove Product" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.5)] !rounded-full hover:!bg-[#ccc]">
                                                <FaRegTrashAlt className="text-[20px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>




                                    </div>
                                </td>

                            </tr>


                            {/* 3rd */}
                            <tr className="odd:bg-white even:bg-gray-50  border-b border-gray-200">
                                <td className="px-2 py-2">

                                    <div className="w-[60px]">
                                        <Checkbox {...label} size="small" />
                                    </div>
                                </td>


                                <td className="px-2 py-2 ">
                                    <div className="flex items-center gap-4 w-[200px]">
                                        <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                                            <Link to="/product/457581">
                                                <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp" className="w-full group-hover:scale-105 transition-all" />
                                            </Link>
                                        </div>

                                        <div className="info w-[70%]">
                                            <h3 className="font-[600] text-[12px] leading-5 hover:text-blue-600">
                                                <Link to="/product/457581">
                                                    Electronic Rubber Table </Link></h3>

                                            <span>Books</span>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-6 py-2 ">
                                    Electronics
                                </td>

                                <td className="px-6 py-2 ">
                                    Women
                                </td>



                                <td className="px-6 py-2 ">
                                    <div className="flex gap-1 mt-4 flex-col">
                                        <span className="oldPrice line-through text-gray-500 text-[14px] leading-3 font-[600]">$58.00</span>

                                        <span className="price text-[14px] text-primary font-[600]">$50.00</span>
                                    </div>

                                </td>

                                <td className="px-6 py-2 ">
                                    <p className="text-[14px] w-[100px] mb-2"><span className="font-[600]">234 </span>Sale</p>
                                    <ProgressBar value={50} type="yellow" />
                                </td>

                                <td className="px-6 py-2 ">
                                    <div className="flex w-full items-center gap-4">



                                        <Tooltip title="Edit Product" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.5)] !rounded-full hover:!bg-[#ccc]">
                                                <AiOutlineEdit className="text-[20px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>




                                        <Tooltip title="View Product Details" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.5)] !rounded-full hover:!bg-[#ccc]">
                                                <FaRegEye className="text-[20px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>


                                        <Tooltip title="Remove Product" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.5)] !rounded-full hover:!bg-[#ccc]">
                                                <FaRegTrashAlt className="text-[20px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>
                                    </div>
                                </td>
                            </tr>


                            {/* 4th */}
                            <tr className="odd:bg-white even:bg-gray-50  border-b border-gray-200">
                                <td className="px-2 py-2">

                                    <div className="w-[60px]">
                                        <Checkbox {...label} size="small" />
                                    </div>
                                </td>


                                <td className="px-2 py-2 ">
                                    <div className="flex items-center gap-4 w-[200px]">
                                        <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                                            <Link to="/product/457581">
                                                <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp" className="w-full group-hover:scale-105 transition-all" />
                                            </Link>
                                        </div>

                                        <div className="info w-[70%]">
                                            <h3 className="font-[600] text-[12px] leading-5 hover:text-blue-600">
                                                <Link to="/product/457581">
                                                    Electronic Rubber Table </Link></h3>

                                            <span>Books</span>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-6 py-2 ">
                                    Electronics
                                </td>

                                <td className="px-6 py-2 ">
                                    Women
                                </td>



                                <td className="px-6 py-2 ">
                                    <div className="flex gap-1 mt-4 flex-col">
                                        <span className="oldPrice line-through text-gray-500 text-[14px] leading-3 font-[600]">$58.00</span>

                                        <span className="price text-[14px] text-primary font-[600]">$50.00</span>
                                    </div>

                                </td>

                                <td className="px-6 py-2 ">
                                    <p className="text-[14px] w-[100px] mb-2"><span className="font-[600]">234 </span>Sale</p>
                                    <ProgressBar value={10} type="success" />
                                </td>

                                <td className="px-6 py-2 ">
                                    <div className="flex w-full items-center gap-4">



                                        <Tooltip title="Edit Product" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.5)] !rounded-full hover:!bg-[#ccc]">
                                                <AiOutlineEdit className="text-[20px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>




                                        <Tooltip title="View Product Details" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.5)] !rounded-full hover:!bg-[#ccc]">
                                                <FaRegEye className="text-[20px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>


                                        <Tooltip title="Remove Product" placement="top">
                                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.5)] !rounded-full hover:!bg-[#ccc]">
                                                <FaRegTrashAlt className="text-[20px] text-[rgba(0,0,0,0.7)]" />
                                            </Button>
                                        </Tooltip>




                                    </div>
                                </td>

                            </tr>






                        </tbody>
                    </table>
                </div>
            </div>


            {/* Tailwind CSS Table */}

            <Table1 />



            {/* end of Product Tables */}

            <div className="card my-4 shadow-md sm:rounded-lg bg-white text-black">
                <div className="flex items-center justify-between px-5 py-5">
                    <h2 className="text-[18px] font-[600]">Recent Orders</h2>
                </div>

                <div className="relative overflow-x-auto mt-5 pb-5">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">

                                <th scope="col" className="px-6 py-3 border border-gray-300">
                                    &nbsp;
                                </th>


                                <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">Order Id</th>

                                <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">Payment Id</th>

                                <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">Products</th>

                                <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">Name</th>

                                <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">Phone Number</th>

                                <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">Address</th>

                                <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">Pincode</th>

                                <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">Total Amount</th>

                                <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">Email</th>

                                <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">User Id</th>

                                <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">Order Status</th>

                                <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"> <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]" onClick={() => isShowOrderProducts(0)}>
                                    {
                                        isOpenOrderProduct === 0 ? <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" /> :
                                            <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                                    }

                                </Button>
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><span className="text-blue-500 font[600]">ORD123456</span>
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><span className="text-blue-500 font[600]">PAY987654</span>
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">3 items
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">John Doe
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">+91 9876543210
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">123 Street, NY
                                </td>


                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">110011
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">$149.99
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">john@example.com
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><span className="text-blue-500 font[600]">user_123456</span>
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><Badge status="delivered" />
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">2025-05-24
                                </td>
                            </tr>

                            {
                                isOpenOrderProduct === 0 && (

                                    <tr>
                                        <td className=" pl-20 pb-4" colSpan="6" >
                                            <div className="relative overflow-x-auto mt-5">
                                                <table className="table-auto w-full border-collapse border border-gray-300">
                                                    <thead>

                                                        <tr className="bg-gray-200">

                                                            <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">Product Id</th>

                                                            <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">Product Title</th>

                                                            <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">Image</th>

                                                            <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">Quantity</th>

                                                            <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">Price</th>

                                                            <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">Sub Total</th>




                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        <tr>


                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><span className="text-primary">ORD123456</span>
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><span className="text-primary">A-Line Kurti With Sharara & Dupatta</span>
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><img src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-2-202307260626.jpg" className="w-[40px] h-[40px] object-cover rounded-md">
                                                            </img>
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">2
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">$149.99
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">$149.99
                                                            </td>



                                                        </tr>

                                                        <tr>


                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><span className="text-primary">ORD123456</span>
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><span className="text-primary">A-Line Kurti With Sharara & Dupatta</span>
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><img src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-2-202307260626.jpg" className="w-[40px] h-[40px] object-cover rounded-md">
                                                            </img>
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">2
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">$149.99
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">$149.99
                                                            </td>



                                                        </tr>


                                                    </tbody>
                                                </table>



                                            </div>
                                        </td>
                                    </tr>

                                )}


                            <tr>
                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"> <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]" onClick={() => isShowOrderProducts(1)}>
                                    {
                                        isOpenOrderProduct === 0 ? <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" /> :
                                            <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                                    }

                                </Button>
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><span className="text-blue-500 font[600]">ORD123456</span>
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><span className="text-blue-500 font[600]">PAY987654</span>
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">3 items
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">John Doe
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">+91 9876543210
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">123 Street, NY
                                </td>


                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">110011
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">$149.99
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">john@example.com
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><span className="text-blue-500 font[600]">user_123456</span>
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><Badge status="pending" />
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">2025-05-24
                                </td>
                            </tr>

                            {
                                isOpenOrderProduct === 1 && (

                                    <tr>
                                        <td className=" pl-20 pb-4" colSpan="6" >
                                            <div className="relative overflow-x-auto mt-5">
                                                <table className="table-auto w-full border-collapse border border-gray-300">
                                                    <thead>

                                                        <tr className="bg-gray-200">

                                                            <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">Product Id</th>

                                                            <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">Product Title</th>

                                                            <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">Image</th>

                                                            <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">Quantity</th>

                                                            <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">Price</th>

                                                            <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">Sub Total</th>




                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        <tr>


                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><span className="text-primary">ORD123456</span>
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><span className="text-primary">A-Line Kurti With Sharara & Dupatta</span>
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><img src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-2-202307260626.jpg" className="w-[40px] h-[40px] object-cover rounded-md">
                                                            </img>
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">2
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">$149.99
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">$149.99
                                                            </td>



                                                        </tr>

                                                        <tr>


                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><span className="text-primary">ORD123456</span>
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><span className="text-primary">A-Line Kurti With Sharara & Dupatta</span>
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><img src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-2-202307260626.jpg" className="w-[40px] h-[40px] object-cover rounded-md">
                                                            </img>
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">2
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">$149.99
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">$149.99
                                                            </td>



                                                        </tr>


                                                    </tbody>
                                                </table>



                                            </div>
                                        </td>
                                    </tr>

                                )}


                            <tr>
                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"> <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]" onClick={() => isShowOrderProducts(2)}>
                                    {
                                        isOpenOrderProduct === 0 ? <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" /> :
                                            <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                                    }

                                </Button>
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><span className="text-blue-500 font[600]">ORD123456</span>
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><span className="text-blue-500 font[600]">PAY987654</span>
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">3 items
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">John Doe
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">+91 9876543210
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">123 Street, NY
                                </td>


                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">110011
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">$149.99
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">john@example.com
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><span className="text-blue-500 font[600]">user_123456</span>
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><Badge status="pending" />
                                </td>

                                <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">2025-05-24
                                </td>
                            </tr>

                            {
                                isOpenOrderProduct === 2 && (

                                    <tr>
                                        <td className=" pl-20 pb-4" colSpan="6" >
                                            <div className="relative overflow-x-auto mt-5">
                                                <table className="table-auto w-full border-collapse border border-gray-300">
                                                    <thead>

                                                        <tr className="bg-gray-200">

                                                            <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">Product Id</th>

                                                            <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">Product Title</th>

                                                            <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">Image</th>

                                                            <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">Quantity</th>

                                                            <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">Price</th>

                                                            <th scope="col" className="px-6 py-3 border border-gray-300 whitespace-nowrap">Sub Total</th>




                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        <tr>


                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><span className="text-primary">ORD123456</span>
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><span className="text-primary">A-Line Kurti With Sharara & Dupatta</span>
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><img src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-2-202307260626.jpg" className="w-[40px] h-[40px] object-cover rounded-md">
                                                            </img>
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">2
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">$149.99
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">$149.99
                                                            </td>



                                                        </tr>

                                                        <tr>


                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><span className="text-primary">ORD123456</span>
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><span className="text-primary">A-Line Kurti With Sharara & Dupatta</span>
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap"><img src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-2-202307260626.jpg" className="w-[40px] h-[40px] object-cover rounded-md">
                                                            </img>
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">2
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">$149.99
                                                            </td>

                                                            <td className="border border-gray-300 font-[500] px-6 py-4 whitespace-nowrap">$149.99
                                                            </td>



                                                        </tr>


                                                    </tbody>
                                                </table>



                                            </div>
                                        </td>
                                    </tr>

                                )}




                        </tbody>
                    </table>



                </div>

            </div>


            {/* Chart */}
            <Chart />


        </>
    )
}

export default Dashboard;