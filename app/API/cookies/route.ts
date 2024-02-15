import { headers, cookies } from "next/headers";
import { NextResponse } from "next/server";

//localhost:3000/API/cookies


export async function GET(request:NextResponse) {
    //первый метод чтения заголовка
    const requestHeaders = new Headers(request.headers)
    console.log(requestHeaders.get("Authorization"));

    //второй метод чтения заголовка
    const headersList = headers()
    console.log(headersList.get("Authorization"));   

    //первый способ получения содержимого Cookie
    const theme = request.cookies.get("theme")
    console.log(theme);  

    //второй способ получения содержимого Cookie
    const theme2 = cookies().get("theme")

    //проверить наличие cookies
    let has = cookies().has("theme")
    console.log(cookies().has("theme"));
    
    //удаление cookies().delete("theme")

    //второй способ установки содержимого Cookie
    cookies().set("newTheme","white")

    return new Response(
        `<h1>${requestHeaders.get("Authorization")}</h1> 
        <p>Cookie:</p> 
        <p>первый способ ${theme?.name} ${theme?.value}</p>  
        <p>второй способ ${theme2?.name} ${theme2?.value}</p> 
        <p>присутствие Cookie с именем theme -  ${has}</p> 
        
        `,
        {headers:{
            "Content-Type":"text/html; charset=utf-8",
            "Set-Cookie":"theme=dark",
            "Accept-Language":"ru",
            "Accept-Charset":"utf-8"
        }})
}