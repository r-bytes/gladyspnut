import { GridRegular, Instagram, SocialIcons } from "@components/index";
import artist from "@images/artist.webp"
import { sanityClient, urlFor } from "sanity";

const About = ({ about: { _id, title, subtitle, intro, author } }) => {
    return (
        <>
            <GridRegular
                title={title}
                subTitle={subtitle}
                intro={intro}
                rootClass={"pt-56 sm:pt-24 sm:pt-32 md:max-w-2xl lg:max-w-4xl mx-auto   mx-auto lg:flex justify-center gap-16 bg-card backdrop-blur-2xl rounded shadow-2xl px-12 sm:py-24 pt-44 sm:pt-24 sm:mt-24 max-w-4xl shadow-2xl mx-auto mb-16"}
                profilePicture
                artist={urlFor(author.image).url()}
                socials={<SocialIcons />}
            />
            <Instagram />
        </>
    );
};
export default About;

export const getServerSideProps = async () => {
    const query = `
        *[_type == "about"][0] {
            _id,
            title,
            subtitle,
            author -> {
                name,
                image
            },
            intro
        }
    `;
    const about = await sanityClient.fetch(query)

    return {
        props: {
            about,
        },
    }
}