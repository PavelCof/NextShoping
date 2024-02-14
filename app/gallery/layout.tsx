"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname =usePathname()
  const links = [
    {name:"На главную",url:"/"},
    {name:"Проекты",url:"/projects"},
    {name:"О компании",url:"/about"},
    {name:"Дашборд",url:"/dashbord"},
    {name:"Маршруты перехвата (.)",url:"/folder1"},
    {name:"Маршруты перехвата (.) Галлерея",url:"/gallery"},

  ]

  return (

       <div className=" gap-5 h-full w-full mb-11"> 
              {links.map((link, index)=>{
                  const isActive = pathname.startsWith(link.url)
                return <Link key={index} className={isActive ?`text-red-600 underline h-10 decoration-slate-500 underline-offset-2 hover:decoration-slate-100 `:"text-sky-800 underline decoration-slate-500 underline-offset-2 hover:decoration-slate-100 h-10"} href={link.url} >{link.name}  </Link>
              })

              }
              <div className=" h-full"> {children}</div>
        </div>

 
  );
}
