import Link from "next/link";
import { galleryPhotos } from "./consts";
import Image from 'next/image'

export default function Gallery() {
    return  <div className="h-full relative">
                <div className="font-bold text-xl w-full text-center h-10">Gallery</div>
                <div className="max-h-full w-full flex flex-grow flex-wrap overflow-hidden overflow-y-auto gap-6 items-start absolute top-10 bottom-0 mb-7 px-3">
                    {galleryPhotos.map(({id,name,url,description},index)=>{
                        return <div key={index} className="flex  flex-col justify-center bg-red min-w-[170px] h-[200px] p-7 overflow-hidden bg-white rounded-lg  ">
                            <h2 className="text-center">{name}</h2>
                            <div  className="flex justify-center"> <Link href={`/gallery/${id}`}>  <Image src={url} alt={name} width={100} height={500}/></Link></div>
                            <div className="flex justify-center">{description}</div>
                        </div>
                    })}
                </div>
    </div>
}