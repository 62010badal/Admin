import React, { useContext, useState } from "react";
import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TablePagination, TableRow, Checkbox
} from "@mui/material";
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import { Button } from "@mui/material";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { BiExport } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import ProgressBar from "../../Components/ProgressBar";
import SearchBox from "../../Components/SearchBox";
import { MyContext } from "../../App";


// Define table columns
const columns = [
    { id: "product", label: 'PRODUCT', minWidth: 150 },
    { id: 'category', label: 'CATEGORY', minWidth: 100 },
    { id: 'subcategory', label: 'SUB CATEGORY', minWidth: 150 },
    { id: 'price', label: 'PRICE', minWidth: 150 },
    { id: 'sales', label: 'SALES', minWidth: 150 },
    { id: 'action', label: 'ACTION', minWidth: 150 },
];

// Sample data
const rows = [
    {
        product: 'iPhone 15',
        category: 'Electronics',
        subcategory: 'Mobile Phones',
        price: '$999',
        sales: '1500',
        action: 'View',
    },
    {
        product: 'Samsung Galaxy S23',
        category: 'Electronics',
        subcategory: 'Mobile Phones',
        price: '$899',
        sales: '1200',
        action: 'View',
    },
    {
        product: 'Sony WH-1000XM5',
        category: 'Electronics',
        subcategory: 'Headphones',
        price: '$399',
        sales: '900',
        action: 'View',
    },
    // Add more rows as needed
];

const Products = () => {
    const [categoryFilterVal, setCategoryFilterVal] = useState('');

    const handleChangeCatFilter = (event) => {
        setCategoryFilterVal(event.target.value);
    }
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => setPage(newPage);

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const context = useContext(MyContext);

    return (

        <>
            <div className="flex items-center justify-between px-2 py-0 mt-3">
                <h2 className="text-[18px] font-[600]">
                    Products {" "} <span className="font-[400] text-[14px]">(Material UI Table)</span>
                </h2>

                <div className="col w-[30%] ml-auto flex items-center  gap-3 justify-end">
                    <Button className="btn btn-sm !bg-green-600 !text-white items-center"><BiExport className="mr-4 text-[25px]" />Export</Button>
                    <Button className="btn-blue btn-sm !bg-green-600 !text-white" onClick={() => context.setIsOpenFullScreenPanel(
                        {
                            open:true,
                            model:'Add Product'
                        }
                    )}><FaPlus className="mr-4 text-[25px]" />Add Product</Button>
                </div>
            </div>




            <div className="card px-4 pb-4 my-4 shadow-md sm:rounded-lg bg-white">
                <div className="flex items-center w-full px-5 justify-between ">
                    <div className="col w-[20%]">
                        <h4 className="font-[600] mt-4 text-[13px] ">Category By</h4>
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

                    <div className="col w-[20%] ml-auto">
                        <SearchBox/>
                    </div>
                </div>

                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow >
                                <TableCell>
                                    <Checkbox {...label} size="small" /></TableCell>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox {...label} size="small" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className="flex items-center gap-4 w-[200px]"><div className="img w-[65px] h-[65px] rounded-md overflow-hidden group"> <Link to="/product/457581" data-discover="true">
                                        <img className="w-full group-hover:scale-105 transition-all" src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp" /></Link></div><div className="info w-[70%]"><h3 className="font-[600] text-[12px] leading-5 hover:text-blue-600"><Link to="/product/457581" data-discover="true">Electronic Rubber Table </Link></h3><span>Books</span></div></div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    Electronics
                                </TableCell>


                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    Women
                                </TableCell>



                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className="flex gap-1 mt-4 flex-col">
                                        <span className="oldPrice line-through text-gray-500 text-[14px] leading-3 font-[600]">$58.00</span>

                                        <span className="price text-[14px] text-primary font-[600]">$50.00</span>
                                    </div>
                                </TableCell>


                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p className="text-[14px] w-[100px] mb-2"><span className="font-[600]">234 </span>Sale</p>
                                    <ProgressBar value={40} type="success" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
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
                                </TableCell>

                            </TableRow>

                            <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox {...label} size="small" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className="flex items-center gap-4 w-[200px]"><div className="img w-[65px] h-[65px] rounded-md overflow-hidden group"> <Link to="/product/457581" data-discover="true">
                                        <img className="w-full group-hover:scale-105 transition-all" src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp" /></Link></div><div className="info w-[70%]"><h3 className="font-[600] text-[12px] leading-5 hover:text-blue-600"><Link to="/product/457581" data-discover="true">Electronic Rubber Table </Link></h3><span>Books</span></div></div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    Electronics
                                </TableCell>


                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    Women
                                </TableCell>



                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className="flex gap-1 mt-4 flex-col">
                                        <span className="oldPrice line-through text-gray-500 text-[14px] leading-3 font-[600]">$58.00</span>

                                        <span className="price text-[14px] text-primary font-[600]">$50.00</span>
                                    </div>
                                </TableCell>


                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p className="text-[14px] w-[100px] mb-2"><span className="font-[600]">234 </span>Sale</p>
                                    <ProgressBar value={40} type="success" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
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
                                </TableCell>

                            </TableRow>


                            <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox {...label} size="small" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className="flex items-center gap-4 w-[200px]"><div className="img w-[65px] h-[65px] rounded-md overflow-hidden group"> <Link to="/product/457581" data-discover="true">
                                        <img className="w-full group-hover:scale-105 transition-all" src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp" /></Link></div><div className="info w-[70%]"><h3 className="font-[600] text-[12px] leading-5 hover:text-blue-600"><Link to="/product/457581" data-discover="true">Electronic Rubber Table </Link></h3><span>Books</span></div></div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    Electronics
                                </TableCell>


                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    Women
                                </TableCell>



                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className="flex gap-1 mt-4 flex-col">
                                        <span className="oldPrice line-through text-gray-500 text-[14px] leading-3 font-[600]">$58.00</span>

                                        <span className="price text-[14px] text-primary font-[600]">$50.00</span>
                                    </div>
                                </TableCell>


                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p className="text-[14px] w-[100px] mb-2"><span className="font-[600]">234 </span>Sale</p>
                                    <ProgressBar value={40} type="success" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
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
                                </TableCell>

                            </TableRow>

                            <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox {...label} size="small" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className="flex items-center gap-4 w-[200px]"><div className="img w-[65px] h-[65px] rounded-md overflow-hidden group"> <Link to="/product/457581" data-discover="true">
                                        <img className="w-full group-hover:scale-105 transition-all" src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp" /></Link></div><div className="info w-[70%]"><h3 className="font-[600] text-[12px] leading-5 hover:text-blue-600"><Link to="/product/457581" data-discover="true">Electronic Rubber Table </Link></h3><span>Books</span></div></div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    Electronics
                                </TableCell>


                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    Women
                                </TableCell>



                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className="flex gap-1 mt-4 flex-col">
                                        <span className="oldPrice line-through text-gray-500 text-[14px] leading-3 font-[600]">$58.00</span>

                                        <span className="price text-[14px] text-primary font-[600]">$50.00</span>
                                    </div>
                                </TableCell>


                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p className="text-[14px] w-[100px] mb-2"><span className="font-[600]">234 </span>Sale</p>
                                    <ProgressBar value={40} type="success" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
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
                                </TableCell>

                            </TableRow>

                            <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox {...label} size="small" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className="flex items-center gap-4 w-[200px]"><div className="img w-[65px] h-[65px] rounded-md overflow-hidden group"> <Link to="/product/457581" data-discover="true">
                                        <img className="w-full group-hover:scale-105 transition-all" src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp" /></Link></div><div className="info w-[70%]"><h3 className="font-[600] text-[12px] leading-5 hover:text-blue-600"><Link to="/product/457581" data-discover="true">Electronic Rubber Table </Link></h3><span>Books</span></div></div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    Electronics
                                </TableCell>


                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    Women
                                </TableCell>



                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className="flex gap-1 mt-4 flex-col">
                                        <span className="oldPrice line-through text-gray-500 text-[14px] leading-3 font-[600]">$58.00</span>

                                        <span className="price text-[14px] text-primary font-[600]">$50.00</span>
                                    </div>
                                </TableCell>


                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p className="text-[14px] w-[100px] mb-2"><span className="font-[600]">234 </span>Sale</p>
                                    <ProgressBar value={40} type="success" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
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
                                </TableCell>

                            </TableRow>

                            <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox {...label} size="small" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className="flex items-center gap-4 w-[200px]"><div className="img w-[65px] h-[65px] rounded-md overflow-hidden group"> <Link to="/product/457581" data-discover="true">
                                        <img className="w-full group-hover:scale-105 transition-all" src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp" /></Link></div><div className="info w-[70%]"><h3 className="font-[600] text-[12px] leading-5 hover:text-blue-600"><Link to="/product/457581" data-discover="true">Electronic Rubber Table </Link></h3><span>Books</span></div></div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    Electronics
                                </TableCell>


                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    Women
                                </TableCell>



                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className="flex gap-1 mt-4 flex-col">
                                        <span className="oldPrice line-through text-gray-500 text-[14px] leading-3 font-[600]">$58.00</span>

                                        <span className="price text-[14px] text-primary font-[600]">$50.00</span>
                                    </div>
                                </TableCell>


                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p className="text-[14px] w-[100px] mb-2"><span className="font-[600]">234 </span>Sale</p>
                                    <ProgressBar value={40} type="success" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
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
                                </TableCell>

                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </div>
        </>
    );
};

export default Products;
