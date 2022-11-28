import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import icon1 from "../public/assets/github-logo.png";
import icon2 from "../public/assets/nextjslogo.png";
import icon3 from "../public/assets/vercel.png";
import icon4 from "../public/assets/tailwindcss.png"
import icon5 from "../public/assets/rapidapi.png";


export default function Reference() {
  return (
    <div>
      <Meta title="MMO Games: Reference" />

      <Header />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto mb-10">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div
              className="hover:cursor-pointer sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-gray-300 text-green-500 flex-shrink-0"
            >
              <Link href="/reference/github">
                <Image src={icon1} alt="github" width="80" height="80" />
              </Link>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-semibold mb-2">
                Github
              </h2>
              <p className="leading-relaxed text-base">
              Stores your source code project and tracks a complete history of all changes to that code and become a developer community 
              </p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-semibold mb-2">
              Next.js
              </h2>
              <p className="leading-relaxed text-base">
              Next.js gives you the best developer experience with all the features you need for production such as 
              hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. 
              No config needed.
              </p>
            </div>
            <div
              className="hover:cursor-pointer sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-gray-300 text-green-500 flex-shrink-0"
            >
            <Link href="/reference/nextjs">
              <Image src={icon2} alt="next.js" width="80" height="80" />
            </Link>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div
              className="hover:cursor-pointer sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-gray-300 text-green-500 flex-shrink-0"
            >
            <Link href="/reference/vercel">
              <Image src={icon3} alt="vercel" width="80" height="80" />
            </Link>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-semibold mb-2">
                Vercel
              </h2>
              <p className="leading-relaxed text-base">
              The platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.
              </p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-semibold mb-2">
                Tailwind CSS
              </h2>
              <p className="leading-relaxed text-base">
              Tailwind CSS makes it quicker to write and maintain the code of your application. By using this utility-first framework, you don't have to write custom CSS to style your application.
              </p>
            </div>
            <div
              className="hover:cursor-pointer sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-gray-300 text-green-500 flex-shrink-0"
            >
            <Link href="/reference/tailcss">
              <Image src={icon4} alt="next.js" width="80" height="80" />
            </Link>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-gray-200 sm:flex-row flex-col">
            <div
              className="hover:cursor-pointer sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-gray-300 text-green-500 flex-shrink-0"
            >
            <Link href="/reference/rapidapi">
              <Image src={icon5} alt="rapidapi" width="80" height="80" />
            </Link>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-semibold mb-2">
                Rapid API
              </h2>
              <p className="leading-relaxed text-base">
                API on this apps using Rapid API.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}