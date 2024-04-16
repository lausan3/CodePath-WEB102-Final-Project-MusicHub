import { supabase } from "../client"
import { useState } from "react"

import PostForm from "../components/PostForm"
import { handleChange, handleOptionChange } from "../utils/utils"

const CreatePost = () => {
  const [formData, setFormData] = useState({name: "", description: ""});
  const [selectedOption, setSelectedOption] = useState("");

  const createPost = async (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();

    const insertData: { name?: string; description?: string; role?: string } = {};

    if (formData.name !== "") {
      insertData.name = formData.name;
    }

    if (formData.description !== "") {
      insertData.description = formData.description;
    }

    if (selectedOption !== "") {
      insertData.role = selectedOption;
    }

    await supabase
      .from('Agents')
      .insert(insertData)
      .select();

    alert("Successfully created an agent!");

    window.location.reload();
  }

  return (
    <div className="main-ctn">
      <h1>Create Post</h1>
      <PostForm 
        data={formData} 
        selectedOption={selectedOption} 
        handleChange={(event) => handleChange(event, setFormData)}
        handleOptionChange={(event) => handleOptionChange(event, setSelectedOption)}
        submit={createPost}
      />
    </div>
  )
}

export default CreatePost