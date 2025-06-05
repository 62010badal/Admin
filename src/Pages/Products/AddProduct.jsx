import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import UploadBox from "../../Components/UploadBox";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoMdClose } from "react-icons/io";
import { Button } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";




const UploadProduct = () => {
    const [productCat, setProductCat] = useState('');
    const [productSubCat, setProductSubCat] = useState('');
    const [productFeatured, setProductFeatured] = useState('');
    const [productRams, setProductRams] = useState('');
    const [productWeight, setProductWeight] = useState('');
    const [productSize, setProductSize] = useState('');


    const handleProductSize = (event) => {
        setProductSize(event.target.value);
    };

    const handleProductWeight = (event) => {
        setProductWeight(event.target.value);
    };

    const handleProductCat = (event) => {
        setProductCat(event.target.value);
    };


    const handleProductSubCat = (event) => {
        setProductSubCat(event.target.value);
    };


    const handleProductFeatured = (event) => {
        setProductFeatured(event.target.value);
    };


    const handleProductRams = (event) => {
        setProductRams(event.target.value);
    };



    return (
        <section className="p-5">
            <form className="form p-8 py-3">
                <div className="scroll max-h-[72vh] overflow-y-scroll pr-4">
                    <div className="grid grid-cols-1 mb-3 ">
                        <div className="col">
                            <h3 className="text-[14px] font-[500] mb-2">PRODUCT NAME</h3>
                            <input
                                type="text"
                                className="w-full focus:outline-none p-3 text-sm rounded-sm h-[40px] border border-[rgba(0,0,0,0.1)] focus:border-[rgba(0,0,0,0.4)] bg-[#f1f1f1]"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 mb-3">
                        <div className="col">
                            <h3 className="text-[14px] font-[500] mb-2">DESCRIPTION</h3>
                            <textarea
                                className="w-full focus:outline-none p-3 text-sm rounded-sm h-[140px] border border-[rgba(0,0,0,0.1)] focus:border-[rgba(0,0,0,0.4)] bg-[#f1f1f1]"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 mb-3 gap-4">
                        <div className="col">
                            <h3 className="text-[14px] font-[500] mb-2">Category</h3>
                            <FormControl className="w-full" size="small">
                                <InputLabel id="category-label">Category</InputLabel>
                                <Select
                                    labelId="category-label"
                                    id="category"
                                    value={productCat}
                                    label="Category"
                                    onChange={handleProductCat}
                                    className="bg-[#f1f1f1]"
                                >
                                    <MenuItem value="">None</MenuItem>
                                    <MenuItem value="fashion">Fashion</MenuItem>
                                    <MenuItem value="electronics">Electronics</MenuItem>
                                    <MenuItem value="bags">Bags</MenuItem>
                                    <MenuItem value="footwear">Footwear</MenuItem>
                                    <MenuItem value="groceries">Groceries</MenuItem>
                                    <MenuItem value="beauty">Beauty</MenuItem>
                                    <MenuItem value="wellness">Wellness</MenuItem>
                                    <MenuItem value="jewellery">Jewellery</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="col">
                            <h3 className="text-[14px] font-[500] mb-2">Sub Category</h3>
                            <FormControl className="w-full" size="small">
                                <InputLabel id="productSubCat-label">Sub Category</InputLabel>
                                <Select
                                    labelId="productSubCat-label"
                                    id="productSubCatDrop"
                                    value={productSubCat}
                                    label="Sub Category"
                                    onChange={handleProductSubCat}
                                    className="bg-[#f1f1f1]"
                                >
                                    <MenuItem value="">None</MenuItem>
                                    <MenuItem value="fashion">Men</MenuItem>
                                    <MenuItem value="electronics">Women</MenuItem>
                                    <MenuItem value="bags">Vien Tha Lau La Cusina Goi 300g</MenuItem>
                                    <MenuItem value="footwear">Sumit Pandit</MenuItem>
                                    <MenuItem value="groceries">Smart Watch Accessories</MenuItem>
                                    <MenuItem value="beauty">Cameras</MenuItem>
                                    <MenuItem value="wellness">Men Bags</MenuItem>
                                    <MenuItem value="jewellery">Women Bags</MenuItem>
                                    <MenuItem value="jewellery">Lays</MenuItem>
                                    <MenuItem value="jewellery">Men Footwear</MenuItem>
                                    <MenuItem value="jewellery">Women Footwear</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="col">
                            <h3 className="text-[14px] font-[500] mb-2">Price</h3>
                            <input type="number"
                                min="1"
                                className="w-full focus:outline-none p-3 text-sm rounded-sm h-[40px] border border-[rgba(0,0,0,0.1)] focus:border-[rgba(0,0,0,0.4)] bg-[#f1f1f1] e"

                            />

                        </div>
                    </div>

                    <div className="grid grid-cols-3 mb-3 gap-4">
                        <div className="col">
                            <h3 className="text-[14px] font-[500] mb-2">OLD PRICE</h3>
                            <input type="number"
                                min="1"
                                className="w-full focus:outline-none p-3 text-sm rounded-sm h-[40px] border border-[rgba(0,0,0,0.1)] focus:border-[rgba(0,0,0,0.4)] bg-[#f1f1f1]"
                            />
                        </div>

                        <div className="col">
                            <h3 className="text-[14px] font-[500] mb-2">IS FEATURED</h3>
                            <FormControl className="w-full" size="small">
                                <InputLabel id="featured">None</InputLabel>
                                <Select
                                    labelId="featured"
                                    id="featuredDrop"
                                    value={productFeatured}
                                    label="featured"
                                    onChange={handleProductFeatured}
                                    className="bg-[#f1f1f1]"
                                >
                                    <MenuItem value="">None</MenuItem>
                                    <MenuItem value="true">True</MenuItem>
                                    <MenuItem value="false">False</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="col">
                            <h3 className="text-[14px] font-[500] mb-2">PRODUCT STOCK</h3>
                            <input
                                type="text"
                                className="w-full focus:outline-none p-3 text-sm rounded-sm h-[45px] border border-[rgba(0,0,0,0.1)] focus:border-[rgba(0,0,0,0.4)] bg-[#f1f1f1]"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 mb-3 gap-4">
                        <div className="col">
                            <h3 className="text-[14px] font-[500] mb-2">PRODUCT BRAND</h3>
                            <input
                                type="text"
                                className="w-full focus:outline-none p-3 text-sm rounded-sm h-[45px] border border-[rgba(0,0,0,0.1)] focus:border-[rgba(0,0,0,0.4)] bg-[#f1f1f1]"
                            />
                        </div>

                        <div className="col">
                            <h3 className="text-[14px] font-[500] mb-2">DISCOUNT</h3>
                            <input
                                type="number"
                                className="w-full focus:outline-none p-3 text-sm rounded-sm h-[45px] border border-[rgba(0,0,0,0.1)] focus:border-[rgba(0,0,0,0.4)] bg-[#f1f1f1]"
                            />
                        </div>

                        <div className="col">
                            <h3 className="text-[14px] font-[500] mb-2">PRODUCT RAMS</h3>
                            <FormControl className="w-full" size="small">
                                <InputLabel id="product-ram">None</InputLabel>
                                <Select
                                    labelId="product-ram"
                                    id="product-ram"
                                    value={productRams}
                                    label="product-ram"
                                    onChange={handleProductRams}
                                    className="bg-[#f1f1f1]"
                                >
                                    <MenuItem value="2GB">2GB</MenuItem>
                                    <MenuItem value="4GB">4GB</MenuItem>
                                    <MenuItem value="6GB">6GB</MenuItem>
                                    <MenuItem value="8GB">8GB</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 mb-3 gap-4">
                        <div className="col">
                            <h3 className="text-[14px] font-[500] mb-2">PRODUCT WEIGHT</h3>
                            <FormControl className="w-full" size="small">
                                <InputLabel id="product-weight">None</InputLabel>
                                <Select
                                    labelId="product-weight"
                                    id="product-weight"
                                    value={productWeight}
                                    label="product-weight"
                                    onChange={handleProductWeight}
                                    className="bg-[#f1f1f1]"
                                >
                                    <MenuItem value="5KG">5KG</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="col">
                            <h3 className="text-[14px] font-[500] mb-2">PRODUCT SIZE</h3>
                            <FormControl className="w-full" size="small">
                                <InputLabel id="product-size-label">None</InputLabel>
                                <Select
                                    labelId="product-size-label"
                                    id="product-size"
                                    value={productSize}
                                    label="product-size"
                                    onChange={handleProductSize}
                                    className="bg-[#f1f1f1]"
                                >
                                    <MenuItem value="S">S</MenuItem>
                                    <MenuItem value="M">M</MenuItem>
                                    <MenuItem value="L">L</MenuItem>
                                    <MenuItem value="XL">XL</MenuItem>
                                    <MenuItem value="XXL">XXL</MenuItem>
                                </Select>
                            </FormControl>
                        </div>


                        <div className="col">
                            <h3 className="text-[14px] font-[500] mb-2">RATINGS</h3>
                            <Rating defaultValue={3} size="medium" className="mb-2" />
                        </div>
                    </div>


                    <div className="col w-full p-5 px-0 mb-2">
                        <h3 className="font-[700] text-[18px] mb-3">Media And Images</h3>
                        <div className="grid lg:grid-cols-7 sm:grid-cols-3 gap-4">

                            <div className="uploadBoxWrapper relative">
                                <span className="absolute w-[20px] h-[20px]  rounded-full overflow-hidden bg-red-700  -top-[8px] -right-[5px] flex items-center justify-center z-50 cursor-pointer"><IoMdClose className="text-white text-[17px]" /></span>
                                <div className="uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 hover:bg-gray-200 flex items-center justify-center flex-col  relative">

                                    <LazyLoadImage
                                        alt={"image"}
                                        src={"https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp"}
                                        className="w-full h-full object-cover"
                                        effect="blur"
                                        wrapperProps={{
                                            style: { transitionDelay: "1s" },
                                        }}
                                    />

                                </div>
                            </div>

                            <div className="uploadBoxWrapper relative">
                                <span className="absolute w-[20px] h-[20px]  rounded-full overflow-hidden bg-red-700  -top-[8px] -right-[5px] flex items-center justify-center z-50 cursor-pointer"><IoMdClose className="text-white text-[17px]" /></span>
                                <div className="uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 hover:bg-gray-200 flex items-center justify-center flex-col  relative">

                                    <LazyLoadImage
                                        alt={"image"}
                                        src={"https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp"}
                                        className="w-full h-full object-cover"
                                        effect="blur"
                                        wrapperProps={{
                                            style: { transitionDelay: "1s" },
                                        }}
                                    />

                                </div>
                            </div>

                            <div className="uploadBoxWrapper relative">
                                <span className="absolute w-[20px] h-[20px]  rounded-full overflow-hidden bg-red-700  -top-[8px] -right-[5px] flex items-center justify-center z-50 cursor-pointer"><IoMdClose className="text-white text-[17px]" /></span>
                                <div className="uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 hover:bg-gray-200 flex items-center justify-center flex-col  relative">

                                    <LazyLoadImage
                                        alt={"image"}
                                        src={"https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp"}
                                        className="w-full h-full object-cover"
                                        effect="blur"
                                        wrapperProps={{
                                            style: { transitionDelay: "1s" },
                                        }}
                                    />

                                </div>
                            </div>

                            <div className="uploadBoxWrapper relative">
                                <span className="absolute w-[20px] h-[20px]  rounded-full overflow-hidden bg-red-700  -top-[8px] -right-[5px] flex items-center justify-center z-50 cursor-pointer"><IoMdClose className="text-white text-[17px]" /></span>
                                <div className="uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 hover:bg-gray-200 flex items-center justify-center flex-col  relative">

                                    <LazyLoadImage
                                        alt={"image"}
                                        src={"https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp"}
                                        className="w-full h-full object-cover"
                                        effect="blur"
                                        wrapperProps={{
                                            style: { transitionDelay: "1s" },
                                        }}
                                    />

                                </div>
                            </div>

                            <div className="uploadBoxWrapper relative">
                                <span className="absolute w-[20px] h-[20px]  rounded-full overflow-hidden bg-red-700  -top-[8px] -right-[5px] flex items-center justify-center z-50 cursor-pointer"><IoMdClose className="text-white text-[17px]" /></span>
                                <div className="uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 hover:bg-gray-200 flex items-center justify-center flex-col  relative">

                                    <LazyLoadImage
                                        alt={"image"}
                                        src={"https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp"}
                                        className="w-full h-full object-cover"
                                        effect="blur"
                                        wrapperProps={{
                                            style: { transitionDelay: "1s" },
                                        }}
                                    />

                                </div>
                            </div>

                            <div className="uploadBoxWrapper relative">
                                <span className="absolute w-[20px] h-[20px]  rounded-full overflow-hidden bg-red-700  -top-[8px] -right-[5px] flex items-center justify-center z-50 cursor-pointer"><IoMdClose className="text-white text-[17px]" /></span>
                                <div className="uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 hover:bg-gray-200 flex items-center justify-center flex-col  relative">

                                    <LazyLoadImage
                                        alt={"image"}
                                        src={"https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp"}
                                        className="w-full h-full object-cover"
                                        effect="blur"
                                        wrapperProps={{
                                            style: { transitionDelay: "1s" },
                                        }}
                                    />

                                </div>
                            </div>

                            <UploadBox multiple={true} />
                        </div>
                    </div>
                </div>


                <hr />
                <br />
                <Button type="button" className="btn-blue btn-lg  w-full !mt-4 gap-4 flex items-center justify-center"><FaCloudUploadAlt  className="text-[25px] "/>
                    Publish and View</Button>
            </form>
        </section>
    );
};

export default UploadProduct;

