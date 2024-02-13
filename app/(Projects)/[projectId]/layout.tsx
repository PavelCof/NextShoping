import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute:"Каталог приложений NextShoping",
    default:"NextShoping",
    template:"Проект %s | NextShoping"
  },
  description: "Каталог приложений NextShoping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 <>
             <div  className="flex flex-row gap-5 ">
             {/* <Link className="text-sky-800 underline decoration-slate-500 underline-offset-2 hover:decoration-slate-100" href={back}  replace={false} >Назад</Link> */}
                <Link className="text-sky-800 underline decoration-slate-500 underline-offset-2 hover:decoration-slate-100" href='/' >На главную</Link>
                <Link className="text-sky-800 underline decoration-slate-500 underline-offset-2 hover:decoration-slate-100"  href='/' >О компании</Link>
                <Link className="text-sky-800 underline decoration-slate-500 underline-offset-2 hover:decoration-slate-100"  href='/' >Ссылки</Link>
            </div>
            <div className="p-3 h-full"> {children}</div>
 </>  
  );
}
