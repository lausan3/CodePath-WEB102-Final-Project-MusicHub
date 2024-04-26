import { useState } from "react";
import { DBCommentData } from "../utils/interface"
import { formatDate } from "../utils/utils"
import { supabase } from "../client";

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
      <p>Posted on {formatDate(data.created_at)}</p>
      <button
        onClick={upvote}
      >{votes}</button>
    </div>
  )
}
export default Comment