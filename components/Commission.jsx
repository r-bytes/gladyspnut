import { Carousel } from "."
import images from "@images/images.json"
import Image from "next/image"


const Commission = () => {
    const selectedCarouselImages = images.find(i => i.page === "commissionInfo" && i.carousel)
    const selectedImages = images.filter(i => i.page === "commissionInfo" && !i.carousel)

    return (
        <div className="mx-auto w-2/3 flex flex-col gap-12">
            {selectedImages.map(img => (
                <div className="w-full flex-shrink-0 left-0 right-0 flex items-center gap-20 bg-card mt-12 backdrop-blur-2xl rounded-xl shadow-2xl p-10" key={img.id}>
                    <span className="">
                        <Image src={img.imageUrl} className="w-full object-contain" width={250} height={250} alt="#" />
                    </span>
                    <div className="tracking-wider leading-relaxed">
                        <h1 className="text-2xl font-bold mb-2"> {img.title} </h1>
                        <h3 className="mb-4"> {img.price} </h3>
                        <ul className="list-disc">
                            {img.info.map((i,index) => (
                                <li key={index} className="text-sm mb-1 ml-3"> {i} </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}

            {/* carousel */}
            {selectedCarouselImages.length ? selectedCarouselImages.map(imgs => (
                <div className="w-full flex-shrink-0 left-0 right-0 flex items-center gap-20 bg-card mb-24 backdrop-blur-2xl rounded-xl shadow-2xl p-10" key={imgs.id}>
                    <span className="mr-16">
                        <Carousel key={imgs.id} images={imgs} />
                    </span>
                    <div className="tracking-wider leading-relaxed">
                        <h1 className="text-2xl font-bold mb-2"> {imgs.title} </h1>
                        <h3 className="mb-4"> {imgs.price} </h3>
                        <ul className="list-disc">
                            {imgs.info.map((i,index) => (
                                <li key={index} className="text-sm mb-1 ml-3"> {i} </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )) :
                <div className="w-full flex-shrink-0 left-0 right-0 flex items-center gap-20 bg-card mb-24 backdrop-blur-2xl rounded-xl shadow-2xl p-10">
                    <span className="">
                        <Carousel images={selectedCarouselImages} />
                    </span>
                    <div className="tracking-wider leading-relaxed">
                        <h1 className="text-2xl font-bold mb-2"> {selectedCarouselImages.title} </h1>
                        <h3 className="mb-4"> {selectedCarouselImages.price} </h3>
                        <ul className="list-disc">
                            {selectedCarouselImages.info.map((i,index) => (
                                <li key={index} className="text-sm mb-1 ml-3"> {i} </li>
                            ))}
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}
export default Commission