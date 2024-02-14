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

       <div > 
              <div className="flex flex-row gap-5">
                {links.map((link, index)=>{
                    const isActive = pathname.startsWith(link.url)
                  return <Link key={index} className={isActive ?`text-red-600 underline decoration-slate-500 underline-offset-2 hover:decoration-slate-100 `:"text-sky-800 underline decoration-slate-500 underline-offset-2 hover:decoration-slate-100 "} href={link.url} >{link.name}  </Link>
                })

                }
              </div>
              <div className="p-3 h-full flex-col"> {children}</div>
        </div>

 
  );
}
