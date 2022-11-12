import { Instagram, SocialIcons, Wrapper } from "@components/index";
import { sanityClient, urlFor } from "sanity";

const About = ({ about: {_id, title, subtitle, intro, author} }) => {
    return (
        <>
            <Wrapper
                title={title}
                subTitle={subtitle}
                intro={intro}
                rootClass={"pt-12 px-12 pt-44 py-24 sm:pt-24 sm:mt-24 sm:pt-24 sm:pt-32 max-w-4xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl mx-auto lg:flex justify-center gap-16  bg-card backdrop-blur-2xl rounded shadow-2xl shadow-2xl"}
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
        *[_type == "grid" && title == "About Me" ][0] {
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