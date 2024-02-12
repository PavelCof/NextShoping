import Link from "next/link";


export default function NotFound(){


    return <div className="h-full">
       <div className="flex flex-row gap-5"> 
          <Link className="text-sky-800 hover:underline  hover:underline-offset-2 hover:decoration-slate-100"  href='/projects' >К проектам</Link>            
          <Link className="text-sky-800 hover:underline  hover:underline-offset-2 hover:decoration-slate-100"  href='/' >О компании</Link>
          <Link className="text-sky-800 hover:underline  hover:underline-offset-2 hover:decoration-slate-100"  href='/' >Ссылки</Link>
        </div>
        <div className="h-full w-full flex flex-col justify-center items-center">
            <h2 className="font-bold">Страница не найдена</h2>
            <p>Попробуйте воспользоваться навигацией</p>
        </div>
    </div> 
    }