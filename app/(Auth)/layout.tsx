import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Каталог приложений NextShoping",
  description: "Каталог приложений NextShoping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 <div className="h-full">
             <div  className="flex flex-row gap-5 ">
                <Link className="text-sky-800 underline decoration-slate-500 underline-offset-2 hover:decoration-slate-100" href='/' >На главную</Link>
                <Link className="text-sky-800 underline decoration-slate-500 underline-offset-2 hover:decoration-slate-100"  href='/login' >Авторизация</Link>
                <Link className="text-sky-800 underline decoration-slate-500 underline-offset-2 hover:decoration-slate-100"  href='/forgot-password' >Восстановление пароля</Link>
            </div>
            <div className="h-full"> {children}</div>
  </div>  
  );
}
