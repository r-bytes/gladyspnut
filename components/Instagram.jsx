import Image from "next/image"
import { useEffect, useState } from "react"

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

    return (
        <div className="max-w-4xl md:w-5/6 mx-auto  bg-card rounded my-32 backdrop-blur-3xl shadow-2xl px-12 grid place-items-center sm:place-items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
            <h1 className="col-span-full text-5xl font-bold mb-16 mt-16"> Instagram Feed </h1>
                {images?.map(i => (
                    <a className="mx-auto hover:scale-105" key={i.id} href={i.permalink}>
                        <Image className="rounded" src={i.media_url} height={300} width={300} alt="2" />
                    </a>
                ))}
                {carouselImages?.map(i => (
                    <a className="mx-auto hover:scale-105" key={i.id} href={i.permalink}>
                        <Image className="rounded" src={i.media_url} height={300} width={300} alt="2" />
                    </a>
                ))}
                <div className="col-span-full my-12 mb-24 mx-auto">
                    <a href={`https://www.instagram.com/raysolles`} target="_blank" rel="noReferrer">
                        <button
                            className="hover:scale-105 rounded-full shadow-2xl hover:translate-y-1" style={{fontSize: "18px", padding: ".8rem 1.7rem", color: "#ffffff",
                                backgroundImage: "linear-gradient(to right,#405de6,#5851db, #833ab4, #c13584, #e1306c, #fd1d1d)"
                            }}>
                            Follow @ raysolles
                        </button>
                    </a>
                </div>
        </div>
    )
}
export default Instagram