import { GridImage } from "@components/index";
import { sanityClient } from "sanity";

const Commisions = ({ filteredImages }) => {
    return (
        <GridImage
            filteredImages={filteredImages}
        />
    );
};

export default Commisions;

export const getServerSideProps = async () => {
    const query = `
        *[
            _type == "work" &&
            page[0]._ref == *[_type == "pages"][6]._id &&
            _type in ["work", "stack", "pages"]
        ]{
            _id,
            mainImage,
            author -> {
                name,
                image,
            },
            "pageInfo": page[0]-> {
                _id,
                title,
                displayname,
            },
            "stackInfo": stack[]-> {
                _id,
                title,
            },
        }
    `;
    const filteredImages = await sanityClient.fetch(query)

    return {
        props: {
            filteredImages,
        },
    }
}