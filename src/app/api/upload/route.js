import React from 'react'

import { NextResponse } from 'next/server';
import multer from 'multer';



export async function GET(request) {
  
    console.log("Success");
    const upload = multer({dest : 'uploads/'})
    const res= upload.single('profileImage');

    console.log(req.body);
    console.log(req.file);

    return NextResponse.json({"File" : req.file})
  }

