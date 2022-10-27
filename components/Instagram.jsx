import Image from "next/image"
import { useEffect, useState } from "react"
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'
import { Button } from "@mui/material";



const Instagram = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch(`https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&&access_token=${process.env.NEXT_PUBLIC_INSTA}`)
        .then(response => {
            return response.json()
        })
        .then(result => setPosts(result.data))
    }, [])

    const images = posts?.filter(p => p.media_type === "IMAGE")
    const carouselImages = posts?.filter(p => p.media_type === "CAROUSEL_ALBUM")
    console.log(carouselImages)

    return (
        <div>
            <div className="container max-w-[1280px]    px-12 md:px-16 sm:max-w-5xl md:max-w-3xl lg:max-w-4xl 2xl:max-w-7xl         mx-auto grid place-items-center sm:place-items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                <h1 className="col-span-full text-5xl font-bold mb-16 mt-12"> {"Instagram Feed"} </h1>
                    {images?.map(i => (
                        <a className="mx-auto" key={i.id} href={i.permalink}>
                            <Image className="rounded-2xl" src={i.media_url} height={300} width={300} alt="2" />
                        </a>
                    ))}
                    {carouselImages?.map(i => (
                        <a className="mx-auto" key={i.id} href={i.permalink}>
                            <Image className="rounded-2xl" src={i.media_url} height={300} width={300} alt="2" />
                        </a>
                    ))}
                    <div className="col-span-full my-12 mb-24 mx-auto">
                        <a href={`https://www.instagram.com/raysolles`} target="_blank" rel="noReferrer">
                            <span
                                className="rounded-2xl shadow-2xl hover:underline hover:translate-y-1" style={{fontSize: "18px", padding: ".8rem 1.7rem", color: "#ffffff",
                                    backgroundImage: "linear-gradient(to right,#405de6,#5851db, #833ab4, #c13584, #e1306c, #fd1d1d)"
                                }}>
                                Follow @ raysolles
                            </span>
                        </a>
                    </div>
            </div>
        </div>
    )
}
export default Instagram