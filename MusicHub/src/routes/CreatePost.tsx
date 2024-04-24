import { supabase } from "../client"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

import PostForm from "../components/PostForm"
import { PostData } from "../utils/interface";
import { handleChange } from "../utils/utils";

const CreatePost = () => {
  const [formData, setFormData] = useState<PostData>({poster_name: "", title: "", body: "", spotify_link: "", upvotes: 0});
  const navigate = useNavigate();

  const createPost = async (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    
    const insertData: {poster_name?: string, title?: string, body?: string, spotify_link?: string, upvotes?: number} = {upvotes: 0};
    
    if (formData.title !== "") {
      insertData.title = formData.title
    } else {
      alert("You must enter a title for your post");
      return;
    }
    
    if (formData.body !== "") {
      insertData.body = formData.body;
    } else {
      alert("You must enter a body for your post");
      return;
    }
    
    if (formData.poster_name !== "") {
      insertData.poster_name = formData.poster_name;
    }
    
    if (formData.spotify_link !== "") {
      insertData.spotify_link = formData.spotify_link;
    }
    
    console.log(insertData);
    
    await supabase
      .from('Posts')
      .insert(insertData)
      .select();


    alert("Successfully created a post!");

    navigate("/");
  }

  return (
    <div className="main-ctn">
      <h1>Create Post</h1>
      <PostForm 
        data={formData} 
        handleChange={(event) => handleChange(event, setFormData)}
        submit={createPost}
      />
    </div>
  )
}

export default CreatePost