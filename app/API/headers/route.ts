import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request:NextResponse) {
    //первый метод чтения заголовка
    const requestHeaders = new Headers(request.headers)
    console.log(requestHeaders.get("Authorization"));

    //второй метод чтения заголовка
    const headersList = headers()
    console.log(headersList.get("Authorization"));   
    
    return new Response(`<h1>${requestHeaders.get("Authorization")}</h1>`,{headers:{"Content-Type":"text/html"}})
}