import Image from "next/image"
import { useEffect, useState } from "react"
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'
import { Button } from "@mui/material";



const Instagram = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
      fetch("https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&&access_token=IGQVJYejRwNFZA3SDNWNm5kb0tEenN3UVgza1I2Nzd0b0JSa29wRk5vYW0xY0ZA0QzlkUko2bTBPd0Y3NnMxQ0VadG9Ca3Y1NUh4d0VGY2poalJOLXFaUF9HS19XaFJ0TnM4ZAlFKMlBmSkhadEdFN19rXwZDZD")
        .then(response => {
            return response.json()
        })
        .then(result => setPosts(result.data))
    }, [])

    const images = posts?.filter(p => p.media_type === "IMAGE")

    return (
        <div>
            <div className="container px-16 border max-w-[1280px] mx-auto flex flex-wrap justify-center items-center">
                <h1 className="w-full text-5xl font-bold mb-16 mt-12 ml-4 text-center sm:text-left"> {"Instagram Feed"} </h1>
                    {images?.map(i => (
                        <a className="mx-auto" key={i.id} href={i.permalink}>
                            <Image className="relative rounded-2xl" src={i.media_url} height={250} width={250} alt="2" />
                            <div className="absolute hover:bg-black/70 z-50" />
                        </a>
                    ))}
                    {/* <InstagramFeed className="" token={"IGQVJYejRwNFZA3SDNWNm5kb0tEenN3UVgza1I2Nzd0b0JSa29wRk5vYW0xY0ZA0QzlkUko2bTBPd0Y3NnMxQ0VadG9Ca3Y1NUh4d0VGY2poalJOLXFaUF9HS19XaFJ0TnM4ZAlFKMlBmSkhadEdFN19rXwZDZD"}  counter="6"/> */}
                <a href={`https://www.instagram.com/raysolles`} target="_blank" className="my-12 text-primary bg-primary w-full text-center" rel="noreferrer">
                    <Button
                        className="text-primary bg-primary rounded-full" style={{fontSize: "18px", padding: "1.2rem 2rem", color: "#ffffff",
                            backgroundImage: "linear-gradient(to right,#405de6,#5851db, #833ab4, #c13584, #e1306c, #fd1d1d)"
                        }}
                        >
                        Follow @ raysolles
                    </Button>
                </a>
            </div>
        </div>
    )
}
export default Instagram