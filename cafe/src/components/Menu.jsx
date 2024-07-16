
import React, { useState } from "react";
import { Button, Dialog, DialogContent, TextField } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomButton from "./Button";


const Menu = ({ menuItems }) => {
  const [orderData, setOrderData] = useState({
    itemName: "",
    numberOfItem: "",
    address: "",
    price: "",
    url:""
  });
  const [open, setOpen] = useState(false);


  const HandelOnChane = (e) => {
    e.preventDefault();
    setOrderData({...orderData,[e.target.name]: e.target.value });
  };


  const handleClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (data) => {
    setOrderData({   
      itemName : data.itemName,
      price : data.price,
      url : data.src
    })
    setOpen(true);
  };

  const placeOrder = async()=>{
    const Response = await axios.post('api/users/order',orderData);
    if(Response.status === 200){
    setOpen(false);
    toast(Response.data.message);
    }
  }


  return (
    <div className="text-center bg-black">
      <h1 className="uppercase text-[40px] font-bold py-10">our <span className="text-[#D3AD7F]">menu</span></h1>
      <div className="grid grid-cols-3 grid-rows-2 items-center justify-evenly gap-10 mx-[200px]">
        {menuItems.map((item, index) => (
          <div
            className="h-[300px] w-[300px] border border-[#D3AD7F] flex justify-center items-center flex-col gap-2"
            id={index}
          >
            <img
              src={item.src}
              height={50}
              width={50}
              alt=""
              key={index}
              className="flex justify-center items-center"
            />
            <p className="font-bold">{item.itemName}</p>
            <p>
              {item.price}{" "}
              <span className="line-through">{item.originalPrice}</span>
            </p>
            <input
              type="button"
              value="Order Now"
              className="text-white mt-6 bg-[#D3AD7F] p-1 px-4"
              onClick={() => handleListItemClick(item)}
            />
          </div>
        ))}
      </div>
      <Dialog onClose={handleClose} open={open}>
        <DialogContent>
          <div className="p-20 flex flex-col gap-10">
            <TextField id="standard-basic" label="number of coffee" variant="standard" name="numberOfItem" type="number" onChange={(e)=>HandelOnChane(e)}/>
            <TextField id="standard-basic" label="address" variant="standard" type="text" name="address" onChange={(e)=>HandelOnChane(e)}/>
            <Button variant="outlined" onClick={placeOrder} className="rounded-none">Place Order</Button>
          </div>
        </DialogContent>
      </Dialog>
      <ToastContainer/>
    </div>
  );
};

export default Menu;
