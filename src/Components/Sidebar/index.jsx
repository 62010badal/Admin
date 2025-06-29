import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { RxDashboard } from "react-icons/rx";
import { FaRegImage } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { TbBrandProducthunt } from "react-icons/tb";
import { TbCategory } from "react-icons/tb";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import { Collapse } from 'react-collapse';
import { useState, useContext } from "react";
import { MyContext } from "../../App";



const Sidebar = () => {

    const [submenuIndex, setSubmenuIndex] = useState(null);

    const isOpenSubMenu = (index) => {
        if (submenuIndex === index) {
            setSubmenuIndex(null);
        } else {
            setSubmenuIndex(index);
        }
    };



    const context = useContext(MyContext);


    return (
        <>
            <div className={`sidebar fixed top-0 left-0 bg-[#fff]  h-full border-r border-[rgba(0,0,0,0.1)] py-2 px-4  ${context.isSidebarOpen === true ? 'w-[18%]' : 'w-[0px]'} transition-all overflow-hidden`} >
                <div className="py-2 w-full">
                    <Link to="/">
                        <img src="https://ecme-react.themenate.net/img/logo/logo-light-full.png" className="w-[120px]">
                        </img>
                    </Link>
                </div>



                <ul className="list-none mt-4">
                    <li>
                        <Link to="/">
                            <Button className="!w-full !capitalize !font-[500] !justify-start !gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] items-center !py-2 hover:!bg-[#fafafa]"><RxDashboard className="text-[18px]" onClick={() => isOpenSubMenu("")} /><span>Dashboard</span></Button>
                        </Link>
                    </li>

                    <li>
                        <Button className="!w-full !capitalize !font-[500] !justify-start !gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] items-center !py-2 hover:!bg-[#fafafa]" onClick={() => isOpenSubMenu(0)}><FaRegImage className="text-[18px]" /><span >Home Slides</span>
                            <span className="ml-auto flex w-[30px] h-[30px] items-center justify-center" ><FaAngleDown className={`transition-all ${submenuIndex === 0 ? 'rotate-180' : " "}`} /></span>
                        </Button>


                        <Collapse isOpened={submenuIndex === 0 ? true : false}>
                            <ul className="w-full">
                                <li className="w-full">
                                    <Link to="/homeSlider/list">
                                        <Button className="!text-[rgba(0,0,0,0.6)] !justify-start !capitalize !w-full !text-[13px] !pl-9 flex gap-3 !font-[500]"><span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>Home Banner List
                                        </Button>
                                    </Link>
                                </li>

                                <li className="w-full">
                                    <Link to="/">
                                        <Button className="!text-[rgba(0,0,0,0.6)] !justify-start !capitalize !w-full !text-[13px] !pl-9 !font-[500] flex gap-3" onClick={() => context.setIsOpenFullScreenPanel({
                                            open: true,
                                            model: "Add Home Slide"
                                        })}><span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>Add Home Baneer Slides
                                        </Button>
                                    </Link>
                                </li>
                            </ul>
                        </Collapse>

                    </li>

                    <li>
                        <Link to="/users">
                            <Button className="!w-full !capitalize !font-[500] !justify-start !gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] items-center !py-2 hover:!bg-[#fafafa]"><FiUsers className="text-[18px]" /><span>Users</span></Button>
                        </Link>
                    </li>


                    <li>

                        <Button className="!w-full !capitalize !font-[500] !justify-start !gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] items-center !py-2 hover:!bg-[#fafafa]" onClick={() => isOpenSubMenu(1)}><TbBrandProducthunt className="text-[18px]" /><span>Products</span>
                            <span className="ml-auto flex w-[30px] h-[30px] items-center justify-center" ><FaAngleDown className={`transition-all ${submenuIndex === 1 ? 'rotate-180' : " "}`} /></span>
                        </Button>



                        <Collapse isOpened={submenuIndex === 1 ? true : false}>
                            <ul className="w-full">

                                <li className="w-full">
                                    <Link to="/products">
                                        <Button className="!text-[rgba(0,0,0,0.6)] !justify-start !capitalize !w-full !text-[13px] !pl-9 !font-[500] flex gap-3"><span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>Product List
                                        </Button>
                                    </Link>
                                </li>

                                <li className="w-full">

                                    <Button className="!text-[rgba(0,0,0,0.6)] !justify-start !capitalize !w-full !text-[13px] !pl-9 !font-[500] flex gap-3" onClick={() => context.setIsOpenFullScreenPanel({
                                        open: true,
                                        model: "Add Product"
                                    })}><span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>Product Upload
                                    </Button>

                                </li>
                            </ul>
                        </Collapse>

                    </li>


                    <li>

                        <Button className="!w-full !capitalize !font-[500] !justify-start !gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] items-center !py-2 hover:!bg-[#fafafa] " onClick={() => isOpenSubMenu(2)}><TbCategory className="text-[18px]" /><span>Category</span>
                            <span className="ml-auto flex w-[30px] h-[30px] items-center justify-center" ><FaAngleDown className={`transition-all ${submenuIndex === 2 ? 'rotate-180' : " "}`} /></span>
                        </Button>


                        <Collapse isOpened={submenuIndex === 2 ? true : false}>
                            <ul className="w-full">
                                <li className="w-full">
                                    <Link to="/category/list">
                                        <Button className="!text-[rgba(0,0,0,0.6)] !justify-start !capitalize !w-full !text-[13px] !pl-9 flex gap-3 !font-[500]" ><span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>Category List
                                        </Button>
                                    </Link>
                                </li>

                                <li className="w-full">
                                    <Button className="!text-[rgba(0,0,0,0.6)] !justify-start !capitalize !w-full !text-[13px] !pl-9 !font-[500] flex gap-3" onClick={() => context.setIsOpenFullScreenPanel(
                                        {
                                            open: true,
                                            model: 'Add New Category'
                                        }
                                    )}><span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>Add a category
                                    </Button>

                                </li>

                                <li className="w-full">
                                    <Link to="/subcategory/list">
                                        <Button className="!text-[rgba(0,0,0,0.6)] !justify-start !capitalize !w-full !text-[13px] !pl-9 !font-[500] flex gap-3" ><span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>Sub category list
                                        </Button>
                                    </Link>
                                </li>


                                <li className="w-full">
                                    <Button className="!text-[rgba(0,0,0,0.6)] !justify-start !capitalize !w-full !text-[13px] !pl-9 !font-[500] flex gap-3" onClick={() => context.setIsOpenFullScreenPanel(
                                        {
                                            open: true,
                                            model: 'Add New Sub Category'
                                        }
                                    )}><span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>Add New Sub Category
                                    </Button>

                                </li>


                            </ul>
                        </Collapse>

                    </li>

                    <li>
                        <Link to="/orders">
                            <Button className="!w-full !capitalize !font-[500] !justify-start !gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] items-center !py-2 hover:!bg-[#fafafa]"><BsBagCheck className="text-[18px]" /><span>Orders</span></Button>
                        </Link>
                    </li>


                    <li>
                        <Link to="/logout">
                            <Button className="!w-full !capitalize !font-[500] !justify-start !gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] items-center !py-2 hover:!bg-[#fafafa]"><AiOutlineLogout className="text-[18px]" /><span>Logout</span></Button>
                        </Link>
                    </li>


                </ul>

            </div>
        </>
    )
}

export default Sidebar;




