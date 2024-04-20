import { supabase } from '../client';
import { DBPostData } from "../utils/interface";
import { Link } from 'react-router-dom';
import { useState } from 'react';

import './../themes/Post.css';
import SpotifyOEmbed from "./SpotifyOEmbed";
import { formatDate } from '../utils/utils';

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
    <>
    <Link to={`/post/${data.id}`}>
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
          >Posted on: {formatDate(data.created_at)}</p>

        <p
          className="post-upvotes"
          >Upvotes: </p>

      </section>
    </Link>
      <button
        className="post-upvote-button"
        onClick={upvote}
        >{votes}</button>

      {
        data.spotify_link ? <SpotifyOEmbed url={data.spotify_link}/> : null
      }
    </>
  )
}

export default Post