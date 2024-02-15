import { comment } from "postcss"
import {comments} from "./data"
import { headers } from "next/headers"

export async function GET() {
    return Response.json(comments)
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