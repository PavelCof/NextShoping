import Link from "next/link";

export default function Folder4() {
    return <div>f4

        <div className="flex flex-col">
            <Link href="/folder1/folder3">ссылка на f3</Link>
            <Link href="/about">ссылка на About (...)</Link>
        </div>
    </div>
}