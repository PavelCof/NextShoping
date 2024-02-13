"use client"

import { link } from "fs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
// import "./globals.css";

import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    {name:"На главную",url:"/"},
    {name:"Проекты",url:"/projects"},
    {name:"О компании",url:"/about"},
    {name:"Заказать",url:"/order-product"},

  ]
  const pathname =usePathname()

  return (
 <div className="h-full">
             <div  className="flex flex-row gap-5 ">
              {links.map((link)=>{
                  const isActive = pathname.startsWith(link.url)
                return <Link className={isActive ?`text-red-600 underline decoration-slate-500 underline-offset-2 hover:decoration-slate-100 `:"text-sky-800 underline decoration-slate-500 underline-offset-2 hover:decoration-slate-100 "} href={link.url} >{link.name}</Link>
              })

              }
                

            </div>
            <div className="h-full"> {children}</div>
  </div>  
  );
}
