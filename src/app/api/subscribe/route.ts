import { NextRequest, NextResponse } from "next/server";

import Customer from '../../../repository/models/customer';
import dbConnect from "@/repository/connect";


export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, name, phone } = body;

  if (!email) {
    console.error("email is not defined");
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }

  await dbConnect();

  try {
    const newCustomer = new Customer({
      email,
      name,
      phone,
      timestamp: Date.now(),
    });
    await newCustomer.save();
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Error', error }, { status: 200 });  
  }

  return NextResponse.json({ message: `Email: ${email} was successfully subscribed` }, { status: 200 });
}
