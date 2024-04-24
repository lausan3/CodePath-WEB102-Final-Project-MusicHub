import { supabase } from "../client"
import { useState } from "react"

import './../themes/Comments.css'
import { CommentData } from "../utils/interface";
import { handleChange } from "../utils/utils";

interface props {
  id: string
}

const CommentForm = ({id}: props) => {
  const [commentForm, setCommentForm] = useState<CommentData>({poster_name: "", body: "", post_id: id});

  const addComment = async (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    
    const insertData: {poster_name?: string, body?: string, upvotes: number, post_id: string} = {upvotes: 0, post_id: id};
    
    if (commentForm.poster_name !== "") {
      insertData.poster_name = commentForm.poster_name;
    }

    if (commentForm.body !== "") {
      insertData.body = commentForm.body;
    } else {
      alert("You must enter a body for your comment");
      return;
    }
    
    console.log(insertData);
    
    await supabase
      .from('Comments')
      .insert(insertData);

    alert("Successfully added a comment!");

    window.location.reload();
  }

  return (
    <div className="comment-form-ctn">
      <form className='create-form'>
        <input 
          type="text" 
          id="poster_name" 
          name="poster_name" 
          value={commentForm.poster_name} 
          onChange={(event) => handleChange(event, setCommentForm)} 
          placeholder="Enter your name (optional)"
        />
        <br/>
        <br/>

        <textarea 
          rows={3} 
          cols={50} 
          name="body" 
          value={commentForm.body} 
          onChange={(event) => handleChange(event, setCommentForm)}
          placeholder="Text (required)"
          />
        <br/>
        <br/>


        <input type="submit" value="Submit" onClick={addComment} />
      </form>
    </div>
  )
}

export default CommentForm