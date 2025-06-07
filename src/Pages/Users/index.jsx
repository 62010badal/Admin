import React, { useContext, useState } from "react";
import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TablePagination, TableRow, Checkbox
} from "@mui/material";
import { Link } from "react-router-dom";
import SearchBox from "../../Components/SearchBox";
import { MyContext } from "../../App";
import Chip from '@mui/material/Chip';
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { SlCalender } from "react-icons/sl";




// Define table columns
const columns = [
    { id: "userImg", label: 'USER IMAGE', minWidth: 80 },
    { id: 'userName', label: 'USER NAME', minWidth: 100 },
    { id: 'userEmail', label: 'USER EMAIL', minWidth: 150 },
    { id: 'userPh', label: 'USER PHONE NO', minWidth: 150 },
    { id: 'createdDate', label: 'CREATED', minWidth: 150 },

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

const Users = () => {


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
            <div className="card pt-5 px-4 pb-4 my-4 shadow-md sm:rounded-lg bg-white">
                <div className="flex items-center w-full px-5 justify-between ">
                    <div className="col w-[40%]">

                        <h2 className="text-[18px] font-[600]">
                            User List {" "}
                        </h2>
                    </div>

                    <div className="col w-[40%] ml-auto">
                        <SearchBox />
                    </div>
                </div>

                <br />

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
                                    <div className="flex items-center gap-4 w-[70px]"><div className="img w-[45px] h-[45px] rounded-md overflow-hidden group"> <Link to="/product/457581" data-discover="true">
                                        <img className="w-full group-hover:scale-105 transition-all" src="https://mui.com/static/images/avatar/1.jpg" /></Link>
                                    </div>
                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    Ram Kumar
                                </TableCell>


                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className="flex items-center gap-2"> <MdOutlineMarkEmailRead />
                                        ram454157@gmail.com</span>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className="flex items-center gap-2"> <MdLocalPhone />
                                        +91-625484515</span>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className="flex items-center gap-2"> <SlCalender  />
                                        07-06-2025</span>
                                </TableCell>

                            </TableRow>

                             <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox {...label} size="small" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className="flex items-center gap-4 w-[70px]"><div className="img w-[45px] h-[45px] rounded-md overflow-hidden group"> <Link to="/product/457581" data-discover="true">
                                        <img className="w-full group-hover:scale-105 transition-all" src="https://mui.com/static/images/avatar/1.jpg" /></Link>
                                    </div>
                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    Ram Kumar
                                </TableCell>


                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className="flex items-center gap-2"> <MdOutlineMarkEmailRead />
                                        ram454157@gmail.com</span>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className="flex items-center gap-2"> <MdLocalPhone />
                                        +91-625484515</span>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className="flex items-center gap-2"> <SlCalender  />
                                        07-06-2025</span>
                                </TableCell>

                            </TableRow>

                             <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox {...label} size="small" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className="flex items-center gap-4 w-[70px]"><div className="img w-[45px] h-[45px] rounded-md overflow-hidden group"> <Link to="/product/457581" data-discover="true">
                                        <img className="w-full group-hover:scale-105 transition-all" src="https://mui.com/static/images/avatar/1.jpg" /></Link>
                                    </div>
                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    Ram Kumar
                                </TableCell>


                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className="flex items-center gap-2"> <MdOutlineMarkEmailRead />
                                        ram454157@gmail.com</span>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className="flex items-center gap-2"> <MdLocalPhone />
                                        +91-625484515</span>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className="flex items-center gap-2"> <SlCalender  />
                                        07-06-2025</span>
                                </TableCell>

                            </TableRow>

                             <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox {...label} size="small" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className="flex items-center gap-4 w-[70px]"><div className="img w-[45px] h-[45px] rounded-md overflow-hidden group"> <Link to="/product/457581" data-discover="true">
                                        <img className="w-full group-hover:scale-105 transition-all" src="https://mui.com/static/images/avatar/1.jpg" /></Link>
                                    </div>
                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    Ram Kumar
                                </TableCell>


                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className="flex items-center gap-2"> <MdOutlineMarkEmailRead />
                                        ram454157@gmail.com</span>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className="flex items-center gap-2"> <MdLocalPhone />
                                        +91-625484515</span>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className="flex items-center gap-2"> <SlCalender  />
                                        07-06-2025</span>
                                </TableCell>

                            </TableRow>

                             <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox {...label} size="small" />
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className="flex items-center gap-4 w-[70px]"><div className="img w-[45px] h-[45px] rounded-md overflow-hidden group"> <Link to="/product/457581" data-discover="true">
                                        <img className="w-full group-hover:scale-105 transition-all" src="https://mui.com/static/images/avatar/1.jpg" /></Link>
                                    </div>
                                    </div>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    Ram Kumar
                                </TableCell>


                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className="flex items-center gap-2"> <MdOutlineMarkEmailRead />
                                        ram454157@gmail.com</span>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className="flex items-center gap-2"> <MdLocalPhone />
                                        +91-625484515</span>
                                </TableCell>

                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className="flex items-center gap-2"> <SlCalender  />
                                        07-06-2025</span>
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

export default Users;
