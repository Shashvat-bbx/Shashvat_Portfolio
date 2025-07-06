
import Link from 'next/link'
import ThemeToggle from "./toggle";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 flex flex-row-reverse p-2 px-4 border-b-2 border-gray-600">      
      <div className="flex gap-8 text-2xl ">        
        <Link href="/home">Home</Link>
        <Link href="/publications">Publications</Link>
        <Link href="/projects">Projects</Link>        
        <Link href="/CV">CV</Link>
        <ThemeToggle />
      </div>
    </div>
  );
}