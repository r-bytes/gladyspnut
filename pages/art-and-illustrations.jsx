import ImageGrid from "@components/ImageGrid";
import Image from "next/image";
import images from "../public/assets/art/images.json"

const Art = () => {

    return (
        <ImageGrid title={"Art & Illustrations"} images={images} />
    );
};
export default Art;
