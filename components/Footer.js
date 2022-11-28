import Link from "next/link";
import Image from "next/image";
import apple_icon from "../public/assets/apple-icon.png";

export default function Footer() {
  return (

<footer class="sticky bottom-0 text-gray-600 body-font z-50 bg-amber-100">
      <div class="container px-3 py-6 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        
        <div class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
          <Link href="/" className="flex title-font font-sm items-center text-gray-700  hover:text-gray-900 mb-4 mr-3 md:mb-0">
        
           
           
            <h1 className="ml-2">Games News</h1>
            
         
          </Link>
          <Link href="/reference" className="flex title-font font-sm items-center text-gray-700  hover:text-gray-900 mb-4 mr-3 md:mb-0">
              <h1 className="ml-2">Techstack</h1>
            
         
          </Link>
          <Link href="/faq" className="flex title-font font-sm items-center text-gray-700  hover:text-gray-900 mb-4 mr-3 md:mb-0 " >
              <h1 className="ml-2">FAQ </h1>
            
         
          </Link>
          <Link href="/about" className="flex title-font font-sm items-center text-gray-700  hover:text-gray-900 mb-4 mr-3 md:mb-0">
               <h1 className="ml-2">About Me </h1>
            
         
          </Link>
          
          <Link href="latest" className="flex title-font font-sm items-center text-gray-700  hover:text-gray-900 mb-4 mr-3 md:mb-0">
        
           
           
            <h1 className="ml-2">Latest Game</h1>
            
         
          </Link>
        </div>
      </div>
    
      
    </footer>
  );
}