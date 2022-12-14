import Image from "next/image";
import Link from "next/link";

export default function Cardlatest(props) {
  try {
    return (
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <Link
          href={{
            pathname: "/detail-latest",
            query: { data: JSON.stringify(props) },
          }}
        >
          <div className="flex relative">
            <Image
              alt="thumbnail"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={props.data.thumbnail}
              width="600"
              height="360"
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-green-500 mb-1">
                {props.data.id}
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3  ">
                {props.data.title}
              </h1>
              <p className="leading-relaxed line-clamp-3">
                {props.data.short_description}
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  } catch (e) {
    console.error(e);
  }
}