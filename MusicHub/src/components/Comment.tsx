import { useState } from "react";
import { DBCommentData } from "../utils/interface"
import { formatDate } from "../utils/utils"
import { supabase } from "../client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  data: DBCommentData,
  key: number
}

const Comment = ({data, key}: Props) => {
  const [votes, setVotes] = useState(data.upvotes);

  const upvote = async () => {
    const updateData: DBCommentData = {...data, upvotes: votes + 1};

    console.log(updateData);

    await supabase
      .from('Comments')
      .update(updateData)
      .eq('id', data.id);

    setVotes(votes + 1);
  }

  return (
    <div 
      key={key}
      className="comment-ctn"
    >
      <p>{data.poster_name}</p>
      <p>{data.body}</p>
      <p
        style={{color: 'var(--text-secondary)'}}
      >Posted on {formatDate(data.created_at)}</p>
      <button
          className="see-post-upvote-button"
          onClick={upvote}
        >
          <span
            className="see-post-upvote"
          >
            <FontAwesomeIcon icon={"heart"}/>
          </span>
          {votes}
        </button>
    </div>
  )
}
export default Comment