import Image from "next/image";

const ImageGrid = ({ title, images }) => {

    const selectedImages = images.map(i => (
        <Image
            className="rounded-xl shadow-xl"
            alt={i.imageUrl}
            key={i.id}
            src={i.imageUrl}
            width={500}
            height={500}    
        />
    ))
        
    return (
        <div className="py-56 min-h-fit">
            <h1 className="text-5xl font-bold mb-16 text-center"> {title} </h1>
            <div className="container--rounded p-4 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {selectedImages}
            </div>
        </div>
    );
}
export default ImageGrid