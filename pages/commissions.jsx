import { GridRegular } from "@components/index";
import images from "@images/images.json"

const Commisions = () => {
    const selectedImages = images.filter(i => i.page === "commissions")

    return (
        <GridRegular
            title={"Commisions"} 
            images={selectedImages}
        />
    );
};

export default Commisions;