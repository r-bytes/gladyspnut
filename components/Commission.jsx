import { Carousel } from "."
import images from "@images/images.json"
import Image from "next/image"


const Commission = ({ rootClass }) => {
    const selectedCarouselImages = images.find(i => i.page === "commissionInfo" && i.carousel)
    const selectedImages = images.filter(i => i.page === "commissionInfo" && !i.carousel)

    return (
        <div className={rootClass}>
            {selectedImages.map(img => (
                <div className="max-w-5/6 flex flex-col sm:flex-row justify-center items-center gap-20 bg-card mt-12 backdrop-blur-2xl rounded shadow-2xl p-10" key={img.id}>
                {/* !carousel */}
                    <span className="">
                        <Image src={img.imageUrl} className="w-full object-fit h-64 rounded" width={350} height={350} alt="#" />
                    </span>
                    <div className="flex flex-col gap-2 tracking-wider space-y-3">
                        <h1 className="text-3xl font-bold"> {img.title} </h1>
                        <h3 className="text-sm text-accent font-thin tracking-widest"> {img.price} </h3>
                        <ul className="list-disc flex flex-col justify-center mx-2">
                            {img.info.map((i,index) => (
                                <li key={index} className="text-sm mb-1 ml-3"> {i} </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
                {/* carousel */}
                <div className="w-full flex flex-col flex-shrink-0 left-0 right-0 sm:flex-row items-center gap-20 bg-card mb-24 backdrop-blur-2xl rounded shadow-2xl p-10">
                    <Carousel images={selectedCarouselImages} />
                    <div className="tracking-wider leading-relaxed">
                        <h1 className="text-3xl font-bold mb-2"> {selectedCarouselImages.title} </h1>
                        <h3 className="mb-4 text-xs text-accent font-thin tracking-widest"> {selectedCarouselImages.price} </h3>
                        <ul className="list-disc ml-2">
                            {selectedCarouselImages.info.map((i,index) => (
                                <li key={index} className="text-sm mb-1 ml-3"> {i} </li>
                            ))}
                        </ul>
                    </div>
                </div>
            {/* } */}
        </div>
    )
}
export default Commission