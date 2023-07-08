import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  const { username, email, password } = await request.json();

  await connect();
  const hashedPassword = await bcrypt.hash(password, 7);
  const newUser = new User({ name: username, email, password: hashedPassword });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
