import Image from "next/image";
import Link from "next/link";
import ProjectView from "@/app/projects/progect/ProjectView";



export default function ProjectsPage() {
  return (
        <>
            <div  className="flex flex-row gap-5 ">
                
                <Link className="text-sky-800 underline decoration-slate-500 underline-offset-2 hover:decoration-slate-100" href='/' >На главную</Link>
                <Link className="text-sky-800 underline decoration-slate-500 underline-offset-2 hover:decoration-slate-100"  href='/' >О компании</Link>
                <Link className="text-sky-800 underline decoration-slate-500 underline-offset-2 hover:decoration-slate-100"  href='/' >Ссылки</Link>
            </div>

            <div className="flex justify-center items-center h-full  w-full bg-white  p-7 rounded-md shadow-md">
                <div className=" h-full flex gap-7 ">
                    <ProjectView />
                    <ProjectView />
                    <ProjectView />
                </div>
            </div>
            <div>
        
            </div>
        
        </>

  );
}
