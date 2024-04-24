import { supabase } from "../client"
import { useState, useEffect } from "react"
import { DBPostData } from "../utils/interface";

import './../themes/Forum.css'
import LoadingPage from "../components/Loading";
import Post from "../components/Post";

type Props = {}

const Forum = ({}: Props) => {
  const [data, setData] = useState<DBPostData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await supabase
        .from("Posts")
        .select()
        .order("created_at", {ascending: false});

      if (data.error == null) {
        setData(data.data);
      }
    }

    fetchData().catch(console.error);
  }, [])

  if (data.length <= 0) {
    return <LoadingPage/>
  }

  return (
    <div className="main-ctn">
      <h1>Forum</h1>
      <div className="forum-ctn">
        {
          data.length > 0 ? 
          data.map((post, index) => {
            return (
              <Post data={post} index={index}/>
            )
          })
          :
          null
        }
      </div>
    </div>
  )
}
export default Forum