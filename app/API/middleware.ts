import { NextResponse, type NextRequest } from "next/server";

export function middleware(request:NextRequest) {

    const response = NextResponse.next()

    //проверка cookies и у мтановка при помощи middlewere
        const themePreference = request.cookies.get("theme")
        if(!themePreference){
            response.cookies.set("theme","dark")
        }
        response.headers.set("custom-header", "custom-value");
        return response

        //перенаправление пользователя  
        // if(request.nextUrl.pathname ==="/API/profile"){

        //    return NextResponse.redirect(new URL("/API/dynamic", request.url))
        //    // замена страницы  return NextResponse.rewrite(new URL("/API/dynamic", request.url))
        // }

}


    //export function middleware(request:NextRequest) {
    //перенаправление пользователя 
    //  return NextResponse.redirect(new URL("/", request.url))
        
    //  }

// export const config = {
//     matcher:"/dynamic"
// }