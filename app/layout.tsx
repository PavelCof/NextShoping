import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute:"Каталог приложений NextShoping",
    default:"NextShoping",
    template:"%s | NextShoping"
  },
  description: "Каталог приложений NextShoping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className="relative flex min-h-screen flex-col items-center justify-between p-7 min-w-[331px]">
        <div className="z-10   w-full flex flex-col absolute top-0 bottom-0 left-0 right-0  font-mono  text-gray-700 h-full  min-w-[331px]">
            <div className="pt-7  text-3xl  flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] 
                before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent 
                before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] 
                after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] 
                before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10
                after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-30 before:lg:h-[360px] z-[-1] h-10  justify-center"
                >
                    NextShoping
            </div> 
            <div className="h-full w-full px-7 mb-8">
            {children}      </div>
            <div className="  h-8 bg-opacity-50 text-sky-800"> footer</div>
          </div>
      
      </main>
        </body>
    </html>
  );
}
