import Image from 'next/image'
 export default function ProjectView (){
    return (
    <div className="w-32 h-32 flex flex-col items-center justify-between rounded-md shadow-md shadow-slate-600 text-slate-600 hover:shadow-slate-300 cursor-pointer">
        <h2>Название </h2>
        <Image src={"/next.svg"} 
            width={100}
            height={100}
            alt="Picture of the author"  />
        <p>Описание</p>
    </div>)
}