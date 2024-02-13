import UserAnalytic from "./@analytic/page";
import Notifications from "./@notifications/page";
import RevenueMatrics from "./@revenue/page";


export default function DashbordLayout(
    {children , analytic, revenue, notifications}:
    {children:React.ReactNode,analytic:React.ReactNode,revenue:React.ReactNode,notifications:React.ReactNode}) {
    return (
        <div  >
            <div>{children}</div>
            <div className="flex flex-row w-full"> 
                <div className="flex-1">{analytic}</div>
                <div>{revenue}</div>
            </div>
            <div>{notifications}</div>
        </div>
    )
}

//git commit -m "Создание пользовательского интерфейса с параллельными маршрутами @component "