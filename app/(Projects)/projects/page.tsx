 
import Image from "next/image";
import Link from "next/link";
import ProjectView from "@/app/(Projects)/projects/project/ProjectView";
import type { Metadata } from "next";

export const metadata:Metadata ={
    title:"Все проекты"
}

const projs = [1,2,3]

export default function ProjectsPage() {
  return (
        <>


            <div className="flex justify-center items-center h-full  w-full bg-white  p-7 rounded-md shadow-md">
                <div className=" h-full flex gap-7 ">
                {
                    projs.map((_i:number,index:number)=>
                        <ProjectView index={index} key={index} />
                    )
                }

                    

                </div>
            </div>
            <div>
        
            </div>
        
        </>

  );
}
