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
    { id: "image", label: 'IMAGE', minWidth: 150 },
    { id: "catName", label: 'CATEGORY NAME', minWidth: 150 },
    { id: 'action', label: 'Action', minWidth: 100 },
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

const CategoryList = () => {
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
                    Category List {" "} <span className="font-[400] text-[14px]">(Material UI Table)</span>
                </h2>

                <div className="col w-[30%] ml-auto flex items-center  gap-3 justify-end">
                    <Button className="btn btn-sm !bg-green-600 !text-white items-center"><BiExport className="mr-4 text-[25px]" />Export</Button>
                    <Button className="btn-blue btn-sm !bg-green-600 !text-white" onClick={() => context.setIsOpenFullScreenPanel(
                        {
                            open: true,
                            model: 'Add New Category'
                        }
                    )}><FaPlus className="mr-4 text-[25px]" />Add New Category</Button>
                </div>
            </div>




            <div className="card pt-4 px-4 pb-4 my-4 shadow-md sm:rounded-lg bg-white">
                

                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow >
                                <TableCell width={60}>
                                    <Checkbox {...label} size="small" /></TableCell>
                                {columns.map((column) => (
                                    <TableCell
                                        width={column.minWidth}
                                        key={column.id}
                                       
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            <TableRow>
                                <TableCell >
                                    <Checkbox {...label} size="small" />
                                </TableCell>

                                <TableCell width={100}>
                                    <div className="flex items-center gap-4 w-[80px]"><div className="img w-auto  rounded-md overflow-hidden group"> 
                                        <Link to="/product/457581" data-discover="true">
                                        <img className="w-full group-hover:scale-105 transition-all" src="https://api.spicezgold.com/download/file_1734525239704_foot.png" />
                                        </Link>
                                        </div>
                                       
                                            </div>
                                </TableCell>

                                <TableCell >
                                    Fashion
                                </TableCell>

                                <TableCell width={100}>
                                    <div className="flex w-full items-center gap-1">


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

export default CategoryList;
