import { Instagram, SocialIcons, Wrapper } from "@components/index";
import { sanityClient, urlFor } from "sanity";

const About = ({ about: {_id, title, subtitle, intro, author} }) => {
    return (
        <>
            <Wrapper
                title={title}
                subTitle={subtitle}
                intro={intro}
                rootClass={"mx-4 lg:mx-auto px-12  p-12 sm:pt-24 mt-24    max-w-4xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl lg:flex justify-center gap-16 bg-secondary backdrop-blur-2xl rounded shadow-2xl shadow-2xl"}
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