"use server";
import fs from "fs";
import { NextResponse } from "next/server";
export async function uploadImage(source, id) {
  console.log("source: ", source);

  //   try {
  //     const stream = fs.createWriteStream(`public/images/nextblog/${id}.png`);
  //     const bufferedImage = await source.arrayBuffer();
  //     stream.write(
  //       Buffer.from(bufferedImage, (error) => {
  //         if (error) {
  //           throw new Error("Image failed!");
  //         }
  //       })
  //     );
  //     return NextResponse.json({ status: 200 });
  //   } catch (error) {
  //     console.log(error);
  //   }
}
