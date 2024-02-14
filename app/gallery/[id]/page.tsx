import { galleryPhotos } from "@/app/gallery/consts"
import Image from 'next/image'

export default function ShowImage({params:{id}}:{params:{id:string}}) {
    const showphoto = galleryPhotos.find((photo)=>photo.id===parseInt(id) )!
    return <div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto text-center bg-white rounded-lg">
                <div className="text-center text-3xl font-bold my-4 w-full">
                    {showphoto.name}
                </div>
                <Image src={showphoto?.url} alt={showphoto?.name} width={500} height={500} className="mx-auto "/>
                <h2>{showphoto?.description}</h2>
            </div>
        </div>
}