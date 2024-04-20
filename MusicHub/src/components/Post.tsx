import { DBPostData } from "../utils/interface";
import './../themes/Post.css';
import SpotifyOEmbed from "./SpotifyOEmbed";

interface props {
  data: DBPostData,
  index: number
}

const Post = ({data, index}: props) => {
  return (
    <section 
      id={`${index}`}
      className="post"
    >
      <h3>{data.poster_name}</h3>
      <h3>{data.title}</h3>
      <h3>{data.body}</h3>
      <h3>Upvotes: {data.upvotes}</h3>
      {
        data.spotify_link ?? <SpotifyOEmbed url={data.spotify_link}/>
      }
    </section>
  )
}

export default Post