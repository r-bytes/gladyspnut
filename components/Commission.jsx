import { Carousel } from "."
import images from "@images/images.json"
import Image from "next/image"


const Commission = () => {
    const selectedCarouselImages = images.find(i => i.page === "commissionInfo" && i.carousel)
    const selectedImages = images.filter(i => i.page === "commissionInfo" && !i.carousel)

    return (
        <div className="ml-16">
            {selectedImages.map(img => (
                <div className="w-full flex-shrink-0 left-0 right-0" key={img.id}>
                    <Image src={img.imageUrl} className="w-full object-contain" width={250} height={250} alt="#" />
                </div>
            ))}

            {/* carousel */}
            {selectedCarouselImages.length ? selectedCarouselImages.map(imgs => (
                <div className="w-full flex-shrink-0 left-0 right-0" key={imgs.id}>
                    <Carousel key={imgs.id} images={imgs} />
                </div>
            )) :
                <div className="w-full flex-shrink-0 left-0 right-0">
                    <Carousel images={selectedCarouselImages} />
                </div>
            }
        </div>
    )
}
export default Commission