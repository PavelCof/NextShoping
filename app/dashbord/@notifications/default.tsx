import Card from "@/app/components/card";
import Link from "next/link";


export default function DefaultNotifications() {
    return <Card>
                <div>Notifications</div>
                <Link href="/dashbord/archived">Архив</Link> 
        
        </Card>
    
}