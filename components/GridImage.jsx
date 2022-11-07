import Image from "next/image";

const GridImage = ({ title, images }) => {

    const selectedImages = images.map(i => (
        <div key={i.id} className="group rounded-xl max-w-md mx-auto flex flex-col">
            {/* top card */}
            <div className="rounded-xl">
                <h1 className="p-4"> Title </h1>
                <Image
                    className="rounded-t-xl h-60 w-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    alt={i.imageUrl}
                    key={i.id}
                    src={i.imageUrl}
                    width={500}
                    height={500}    
                />
            </div>
            {/* bottom card */}
            <div className="flex flex-col justify-items-center flex-wrap items-center bg-card shadow-2xl rounded-b-xl px-3">
                <h3 className="my-4 dark:text-yellow-200 text-teal-600 block rounded-full tracking-wider underline"> Stack </h3>
                <ul className="w-full text-sm flex items-center justify-center gap-2 flex-wrap pb-5">
                    <li className="bg-secondaryAccent text-secondary dark:text-primary dark:bg-secondary py-1 px-3 rounded-full text-center"> Adobe </li>
                    <li className="bg-secondaryAccent text-secondary dark:text-primary dark:bg-secondary py-1 px-3 rounded-full text-center"> Photoshop </li>
                    <li className="bg-secondaryAccent text-secondary dark:text-primary dark:bg-secondary py-1 px-3 rounded-full text-center"> Paint </li>
                </ul>
            </div>
        </div>
    ))
        
    return (
        <div className="py-56 min-h-fit">
            <h1 className="text-5xl font-bold mb-16 mt-12 text-center"> {title} </h1>
            
            <div className="max-w-7xl bg-card shadow-2xl backdrop-blur-2xl rounded-xl sm:p-12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {selectedImages}
            </div>
            
        </div>
    );
}
export default GridImage