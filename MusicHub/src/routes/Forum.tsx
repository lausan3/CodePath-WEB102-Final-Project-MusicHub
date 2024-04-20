import { supabase } from "../client"
import { useState, useEffect } from "react"
import { DBPostData } from "../utils/interface";
import LoadingPage from "../components/Loading";

type Props = {}

const Forum = ({}: Props) => {
  const [data, setData] = useState<DBPostData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await supabase
        .from("Posts")
        .select()
        .order("id");

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
      {
        data.length > 0 ? 
          data.map((post, index) => {
            return (
              <div key={index}>
                <h3>{post.poster_name}</h3>
                <h3>{post.title}</h3>
                <h3>{post.body}</h3>
                <h3>Upvotes: {post.upvotes}</h3>
              </div>
            )
          })
        :
          null
      }
    </div>
  )
}
export default Forum