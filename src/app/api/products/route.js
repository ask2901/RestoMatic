import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import mongooseConnect from '../../../../lib/mongoose';
import User from "@/models/product/user"

 
export async function GET(request) {
  
  mongooseConnect();

  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  // console.log("ID:",id);
  if(!id)
  {
    const data = await User.find();
    return NextResponse.json({data})
  }
  else
  {
    const data= await User.findOne({_id:id});
    return NextResponse.json({data})
  }
  
  
}

export async function POST(request) {
  
  const payload = await request.json();
  const {title,description,price}=payload;

  mongooseConnect();
  
  const productDoc= await User.create({
    title,description,price
  });

  console.log(productDoc);

  return NextResponse.json(productDoc);

}


export async function PUT(request){
  const payload= await request.json();
  const {_id,title,description,price}=payload;

  mongooseConnect();
  const res= await User.updateOne({_id},{title,description,price});
  return NextResponse.json(true);


}


export async function DELETE(request){
  const payload= await request.json();
  const {id}=payload;
  console.log(payload);

  mongooseConnect();

  const res= await User.deleteOne({_id:id});
  console.log("Success");

  return NextResponse.json(true);


}