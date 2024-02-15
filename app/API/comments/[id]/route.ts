import { comment } from "postcss"
import {comments} from "../data"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export async function GET(_request:Request,{params}:{params:{id:string}}) {

    const comment = comments.find((comment)=>comment.id===parseInt(params.id))
 
    if(!comment){
        redirect("/API/comments");
    }
    return Response.json(comment)
}
export async function PATCH(request:Request,{params}:{params:{id:string}}) {
    const body = await request.json()
    const {text} = body
    const index = comments.findIndex((comment)=>comment.id===parseInt(params.id))

    if(index>0){
        comments[index].text=text
    }else{
        redirect("/API/comments");
    }

    return  Response.json( comments[index] )
}
export async function DELETE(_request:Request,{params}:{params:{id:string}}) {

    const index = comments.findIndex((comment)=>comment.id===parseInt(params.id))
    if(index>0){
        comments.splice(index,1)
    }else{
        redirect("/API/comments");
    }
    
    return  Response.json({ comment:"Комментарий удалён"})
}