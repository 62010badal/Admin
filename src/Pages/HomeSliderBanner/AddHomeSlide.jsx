import React from "react";

import UploadBox from "../../Components/UploadBox";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoMdClose } from "react-icons/io";
import { Button } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";

const AddHomeSlide = () => {
    return (
        <section className="p-5 bg-gray-50">
            <form className="form p-8 py-3">
                <div className="scroll max-h-[72vh] overflow-y-scroll pr-4 pt-4">
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
                        <UploadBox multiple={true} />
                    </div>
                </div>
                <br />

                <div className="w-[250px]">
                    <Button type="button" className="btn-blue btn-lg  w-full gap-4 flex items-center justify-center"><FaCloudUploadAlt className="text-[25px] " />
                        Publish and View</Button>
                </div>

            </form>
        </section>
    )
}

export default AddHomeSlide;