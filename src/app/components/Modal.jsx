"use client"

import React from "react";
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useRouter } from "next/navigation";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BasicModal=(props) =>{
  
  const[open,setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router = useRouter();

  return (
    <div onClick={props.handleOpen}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="flex flex-col justify-center gap-4">

          <Typography className="flex flex-row justify-center" id="modal-modal-title" variant="h6" component="h2">
            Are you sure
          </Typography>
          <div className="flex flex-row justify-center gap-10">
          <button className="" onClick={async()=>{
            
            var id=props._id;

            const response = await fetch("http://localhost:3000/api/products", {
            method: "DELETE",
            body: JSON.stringify({id}),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            });

            router.push("/products");

          }}>Yes</button>

          <button className="" onClick={()=>{
            router.push("/products");
          }}>No</button>

          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal;