import { comment } from "postcss"
import {comments} from "./data"
import { headers } from "next/headers"
import { NextRequest } from "next/server"
//запрос GET без параметров
// export async function GET() {
//     return Response.json(comments)
// }

//запрос GET с параметрами (поиск сомментария с текстом из параметра query) comments/?query="text"
export async function GET(request:NextRequest) {

    const searchParams = request.nextUrl.searchParams
    const query =searchParams.get("query")
    const filteredComments = query ? comments.filter((comment)=>comment.text.includes(query)):comments
    return Response.json(filteredComments)
}

export async function POST(request:Request) {
    const comment = await request.json()
    const newcomments ={
        id:comments.length+1,
        text:comment.text
    }
    comments.push(newcomments)
    return new Response(
        JSON.stringify(newcomments),
        {
        headers:{
            "Content-Type":"application/json",
        },
        status:201
    })
}