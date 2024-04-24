import { useEffect, useState } from "react"
import { fetchOEmbed } from "../client"

interface props {
  url: string
}

const SpotifyOEmbed = ({url}: props) => {
  const [iframeUrl, setIframeUrl] = useState<string | null>(null);

  // Fetch OEmbed
  useEffect(() => {
    const getEmbed = async () => {
      const response = await fetchOEmbed(url);
  
      console.log(response);
      if (response) {
        setIframeUrl(response.data["iframe_url"]);
      }
    }

    getEmbed().catch(console.error);
  }, []);

  return (
    <>
      {
        iframeUrl ?
        <iframe 
          style={{borderRadius: "12px"}} 
          src={iframeUrl}
          width="400" 
          height="80" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
        >
        
        </iframe>
        :
        null
      }
    </>
  )
}

export default SpotifyOEmbed