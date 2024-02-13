"use client";
export default function ErrorBoumdary({error,reset}:{error:Error; reset:()=>void}){
    return <div className="h-full w-full flex justify-center items-center flex-col">
        Ошибка {error.message}
        <button className=" m-3 px-2 bg-white shadow-md rounded-md text-gray-500" onClick={reset}>Попробовать снова</button>
    </div>
}