"use client"
import { useRouter } from "next/navigation"

export default function OrderProduct(){
const router =useRouter()
const handleClick =() =>{
    return router.push("/")
   ///  return router.replace("/")
   ///  return router.back()  // назад
    ///return router.forward()  // к следующей
}
    return <>
        <h1>Заказать</h1>
        <button onClick={handleClick}>Оформить заказ</button>
    </>
}