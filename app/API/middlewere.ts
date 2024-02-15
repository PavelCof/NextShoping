import { NextResponse, type NextRequest } from "next/server";

export function middlewere(request:NextRequest) {
        if(request.nextUrl.pathname ==="/API/profile"){
            return NextResponse.redirect(new URL("/API/time", request.url))
        }

    // return NextResponse.redirect(new URL("/", request.url))
    
}

// export const config = {
//     matcher:"/dynamic"
// }