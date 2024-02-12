import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

       <div className="flex flex-row gap-5"> 
          <Link className="text-sky-800 underline decoration-slate-500 underline-offset-2 hover:decoration-slate-100"  href='/projects' >К проектам</Link>            
          <Link className="text-sky-800 underline decoration-slate-500 underline-offset-2 hover:decoration-slate-100"  href='/' >О компании</Link>
          <Link className="text-sky-800 underline decoration-slate-500 underline-offset-2 hover:decoration-slate-100"  href='/' >Ссылки</Link></div>

 
  );
}
