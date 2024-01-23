import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
        <>
            <div  className="flex flex-row gap-5 ">
                
                <Link className="text-sky-800 underline decoration-slate-500 underline-offset-2 hover:decoration-slate-100" href='/' >На главную</Link>
                <Link className="text-sky-800 underline decoration-slate-500 underline-offset-2 hover:decoration-slate-100"  href='/' >О компании</Link>
                <Link className="text-sky-800 underline decoration-slate-500 underline-offset-2 hover:decoration-slate-100"  href='/' >Ссылки</Link>
            </div>
            <div className=" h-full flex justify-center items-center bg-white rounded-md shadow-md ">
        1
            </div>
            <div>
        
            </div>
        
        </>

  );
}
