import Image from "next/image"
import { urlFor } from "sanity"

const GridImageItem = ({ _id, title, mainImage, stackInfo }) => {
    return (
        <div className="group rounded max-w-md mx-auto flex flex-col shadow-2xl rounded-b">
            {/* top card */}
            <div className="rounded ">
                <Image
                    className="rounded-t h-60 w-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    alt={mainImage}
                    src={urlFor(mainImage).url()}
                    width={500}
                    height={500}
                    priority={true}
                />
            </div>
            {/* bottom card */}
            <div className="flex flex-col justify-items-center flex-wrap items-center bg-card shadow-2xl rounded-b px-3 max-h-[400px] h-full">
                {/* todo => fill in titles in sanity */}
                {/* <h1 className="p-4"> { title } </h1> */}
                <h3 className="my-4 dark:text-yellow-200 font-normal text-pink-900 block rounded tracking-widest"> Stack </h3>
                <ul className="w-full text-sm flex items-center justify-center gap-2 flex-wrap pb-5">
                {stackInfo.map((tool, index) => (
                    <li key={index} className="bg-secondaryAccent text-secondary dark:text-primary dark:bg-secondary py-1 px-3 rounded-full text-center"> { tool.title } </li>
                ))}
                </ul>
            </div>
        </div>
    )
}
export default GridImageItem