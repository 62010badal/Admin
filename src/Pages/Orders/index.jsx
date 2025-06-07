import React, { useState } from "react";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import Badge from "../../Components/Badge";
import SearchBox from "../../Components/SearchBox";


const Orders = () => {
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
            <div className="card my-4 shadow-md sm:rounded-lg bg-white text-black">
                <div className="flex items-center justify-between px-5 py-5">
                    <h2 className="text-[18px] font-[600]">Recent Orders</h2>
                   <div className="w-[40%]">
                     <SearchBox/>

                   </div>
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
        </>
    )
}

export default Orders