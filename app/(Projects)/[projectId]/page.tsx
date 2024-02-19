import { Metadata } from "next"
import {notFound} from "next/navigation"
import { resolve } from "path"



interface Params {params:{projectId:string}}

//Формируем заголовок из параметров
export const generateMetadata = async ({params}:Params):Promise<Metadata> =>{
    const title = await new Promise(resolve=>{
        setTimeout(() => {
            resolve(`Next ${params.projectId} pro`)
        }, 100);
    })
    return {title:`Проект ${title}`}
}

export default function Page({params}:Params) {
    if(parseInt(params.projectId)>1000){
        notFound()
    }
    return <div>Проект {params.projectId}</div>
}