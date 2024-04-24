import { supabase } from '../client';
import { DBPostData } from "../utils/interface";
import { Link } from 'react-router-dom';
import { useState } from 'react';

import './../themes/Post.css';
import { formatDate } from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    <div
      key={index}
      className='post'
    >
      <Link 
        to={`/post/${data.id}`}
        className='post-ctn'
      >
        <div className="info">

          <p
            className="post-name"
          >Poster: {data.poster_name}</p>
        </div>

        <p
          className="post-title"
        >{data.title}</p>

        <p
        className="post-body"
        >{data.body}</p>


      </Link>
      <div className="bottom">
        <span
          className="post-date"
        >{formatDate(data.created_at)}</span>
        <button
          className="post-upvote-button"
          onClick={upvote}
        >
          <FontAwesomeIcon
          className="post-upvote"
          icon="heart"
          ></FontAwesomeIcon>
          {votes}
        </button>
      </div>
    </div>
  )
}

export default Post