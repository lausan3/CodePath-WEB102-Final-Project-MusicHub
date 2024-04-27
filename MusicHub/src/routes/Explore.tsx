import { supabase } from "../client"
import { useState } from "react"
import { DBPostData } from "../utils/interface"

import './../themes/Explore.css'
import Post from "../components/Post"
import LoadingPage from "../components/Loading"

type Props = {

}

const Explore = ({}: Props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DBPostData[]>([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [upvotes, setUpvotes] = useState("");

  // Populate data
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(`Filter options: ${title}, ${date}, ${upvotes}`)

    setLoading(true);
  
    // Get initial posts by title
    let query = supabase
      .from("Posts")
      .select()
      .ilike('title', `%${title}%`);
  
      if (upvotes === 'highest') {
        query = query.order('upvotes', { ascending: false });
      } else if (upvotes === 'lowest') {
        query = query.order('upvotes', { ascending: true });
      }
    
      if (date === 'newest') {
        query = query.order('created_at', { ascending: false });
      } else if (date === 'oldest') {
        query = query.order('created_at', { ascending: true });
      }
    
      const { data, error } = await query;
    
      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setData(data);
      }

    setLoading(false);
  };

  if (loading) {
    return <LoadingPage/>
  }

  return (
    <div className="main-ctn">
      <h1>Explore</h1>

      <div className="explore-form">
        <input
          className="explore-form-search"
          type="text"
          placeholder="Search for titles"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          className="explore-form-search"
          name="upvotes"
          value={upvotes}
          onChange={(e) => setUpvotes(e.target.value)}
        >
          <option value="">Sort by upvotes</option>
          <option value="highest">Highest</option>
          <option value="lowest">Lowest</option>
        </select>

        <select
          className="explore-form-search"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        >
          <option value="">Sort by date</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>

      </div>
      <button
        className="explore-form-submit"
        type="submit"
        onClick={handleFormSubmit}
      >Filter</button>

      <div className="explore-post-view">
        {
          data.length > 0 ? data.map((post, index) => {
            return <Post data={post} index={index}/>
          })
          :
          null
        }
      </div>
    </div>
  )
}

export default Explore