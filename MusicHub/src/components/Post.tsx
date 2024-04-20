import './../themes/Post.css';
import { supabase } from '../client';
import { DBPostData } from "../utils/interface";

import SpotifyOEmbed from "./SpotifyOEmbed";
import { useState } from 'react';

interface props {
  data: DBPostData,
  index: number
}

const Post = ({data, index}: props) => {
  const [votes, setVotes] = useState(data.upvotes);

  const upvote = async () => {
    const updateData: DBPostData = {...data, upvotes: votes + 1};

    console.log(updateData);

    await supabase
      .from('Posts')
      .update(updateData)
      .eq('id', data.id);

    setVotes(votes + 1);
  }

  return (
    <section 
      id={`${index}`}
      className="post"
    >
      <p
        className="post-name"
      >{data.poster_name}</p>

      <p
        className="post-title"
      >{data.title}</p>

      <p
        className="post-body"
      >{data.body}</p>

      <p
        className="post-date"
      >Posted on: {data.created_at}</p>

      <p
        className="post-upvotes"
      >Upvotes: </p>

      <button
        className="post-upvote-button"
        onClick={upvote}
      >{votes}</button>

      {
        data.spotify_link ? <SpotifyOEmbed url={data.spotify_link}/> : null
      }
    </section>
  )
}

export default Post