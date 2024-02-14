import Link from "next/link";

export default function Folder1() {
    return <div>f1

        <div className="flex flex-col">
           <Link href="/folder1/folder2"> ссылка на f2 (перехват)</Link> 
            <Link href="/folder1/folder4"> перехват (..) и перехват (...)</Link>
        </div>
    </div>
}