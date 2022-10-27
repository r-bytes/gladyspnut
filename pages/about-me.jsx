import { GridRegular, Instagram, SocialIcons } from "@components/index";
import artist from "@images/artist.webp"

const About = () => {
        
    return (
        <div className="">
            <GridRegular
                insta
                title={"About Me"}
                subTitle={"Hi there! I am an illustrator from the Netherlands, specializing in character design and everything kawaii!"}
                intro={`I love to give life to all sorts of characters and my work is influenced a lot by Japanese pop culture. I discovered this at a young age through anime and manga. \n
                    As a kid, I always loved drawing, but when I grew up the big bad adults told me art isn’t a real job and so I chased a career in IT. I’ve had several jobs as a consultant, UX specialist, and graphic designer. But, after 10 years and a burn-out, it was time for me to go back to my true passion: drawing! \n
                    In the following years, I started freelancing with a focus on 2D art, 3D modeling, branding, animation, and a wide variety of design projects. I also build my own kawaii brand CutieSquad and right now we’re selling the cutest merchandise all over the globe. \n
                    I love social media and therefore I am sharing my story and knowledge by drawing time-lapses, tutorials, and general thoughts on art and life as an artist. \n
                    I’m currently working on a few secret projects for high-profile clients but I’m always looking to work with new clients, especially those who will give me some creative freedom. \n `
                }
                image={artist}
                socials={<SocialIcons className="" />}
            />
            <Instagram />
        </div>
    );
};
export default About;
