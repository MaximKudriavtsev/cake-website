import { NextRequest, NextResponse } from "next/server";

import Customer from '../../../repository/models/customer';
import dbConnect from "@/repository/connect";

export async function GET(request: NextRequest) {
  let customers = [];

  await dbConnect();

  try {
    customers = await Customer.find({});
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Error', error }, { status: 200 });  
  }

  return NextResponse.json({ customers }, { status: 200 });
}
