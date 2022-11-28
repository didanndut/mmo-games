import Meta from "../../components/Meta";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import icon2 from "../../public/assets/nextjslogo.png";

export default function Reference() {
    return (
      <div>
        <Meta title="MMO Games: Reference - Next.js" />
        <Header />
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <Image class="lg:w-1/12 md:w-1/10 w-1/10 mb-8 object-cover object-center rounded" alt="detail" src={icon2} width="100" height="100" />
            <div class="text-center lg:w-2/3 w-full">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">Next.js</h1>
              <p class="mb-8 leading-relaxed">Next.js gives you the best developer experience with all the features you need for production such as 
              hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. 
              No config needed.</p>
              <div class="flex justify-center">
                <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Learn More</Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }