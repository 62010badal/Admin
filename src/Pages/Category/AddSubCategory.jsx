import React, { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Button } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';



const handleProductCat = (event) => {
    setProductCat(event.target.value);
};

const handleProductSubCat = (event) => {
    setProductSubCat(event.target.value);
};

const AddSubCategory = () => {
    const [productSubCat, setProductSubCat] = useState('');
    const [productCat, setProductCat] = useState('');
    return (

        <section className="p-5 bg-gray-50">
            <form className="form p-8 py-3">
                <div className="scroll max-h-[72vh] overflow-y-scroll pr-4 pt-4">
                    <div className="grid grid-cols-4 gap-4 mb-3">

                        <div className="col ">
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
                            <input
                                type="text"
                                className="w-full focus:outline-none p-3 text-sm rounded-sm h-[40px] border border-[rgba(0,0,0,0.1)] focus:border-[rgba(0,0,0,0.4)] bg-[#f1f1f1]"
                            />
                        </div>

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

export default AddSubCategory;

