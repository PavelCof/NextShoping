
export default function DashbordLayout(
    {children , analytic, revenue, notifications, login}:
    {   
        children:React.ReactNode,
        analytic:React.ReactNode,
        revenue:React.ReactNode,
        notifications:React.ReactNode, 
        login:React.ReactNode
    }) {
        const isLoggedIn = false
    return isLoggedIn ? (
        <div  >
            <div>{children}</div>
            <div className="flex flex-row w-full"> 
                <div className="flex-1">{analytic}</div>
                <div>{revenue}</div>
            </div>
            <div>{notifications}</div>
        </div>) : (login)
}
  

