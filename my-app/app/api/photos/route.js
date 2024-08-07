import { NextResponse } from "next/server";
import { getAllPhotos } from "@/lib/image-data";
import { photos } from "@/lib/image-data";

export  function GET() {
    const data =  getAllPhotos(photos);
    return NextResponse.json(data); 
}