import { NextRequest, NextResponse } from "next/server";

import EmailSubscribtion from '../../../repository/models/email-subscribtion';

export async function GET(request: NextRequest) {
  let subscribers = [];
  try {
    subscribers = await EmailSubscribtion.find({});
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 200 });  
  }

  return NextResponse.json({ subscribers }, { status: 200 });
}
