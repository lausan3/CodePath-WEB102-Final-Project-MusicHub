import { DBCommentData, DBPostData } from "../utils/interface"
import { supabase } from "../client"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

import SpotifyOEmbed from "../components/SpotifyOEmbed"
import LoadingPage from "../components/Loading"
import CommentForm from "../components/CommentForm"
import Comment from "../components/Comment"
import { formatDate } from "../utils/utils"
import './../themes/SeePost.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SeePost = () => {
  const [data, setData] = useState<DBPostData>({id: 0,
    poster_name: "",
    title: "",
    body: "",
    spotify_link: "",
    upvotes: 0,
    created_at: ""
  });
  const [comments, setComments] = useState<DBCommentData[]>([]);
  const [loading, setLoading] = useState(true);
  const [votes, setVotes] = useState(0);
  const params = useParams();
  const postId = params.id;

  // Populate data
  useEffect(() => {
    const get = async () => {
      setLoading(true);

      const newPostData = await supabase
        .from("Posts")
        .select()
        .eq("id", postId);

      if (!newPostData.error) {
        setData(newPostData.data[0]);
        setVotes(newPostData.data[0]["upvotes"]);
      }

      const newCommentData = await supabase
        .from("Comments")
        .select()
        .eq("post_id", postId);

      if (!newCommentData.error) {
        setComments(newCommentData.data);
      }

      setLoading(false);
    }

    get().catch(console.error);
  }, [])

  const upvote = async () => {
    const updateData: DBPostData = {...data, upvotes: votes + 1};

    console.log(updateData);

    await supabase
      .from('Posts')
      .update(updateData)
      .eq('id', data.id);

    setVotes(votes + 1);
  }

  if (loading) {
    return <LoadingPage/>
  }

  if (data.body == "") {
    return (
      <div className="main-ctn">
        <h2>Something went wrong... Please refresh your page and try again.</h2>
      </div>
    )
  }

  return (
    <div className="main-ctn">
      <div className="see-post-ctn">
        <span
          className="see-post-title"
        >{data.title}</span>

        <div className="top-info">
          <span
            className="see-post-name"
          >{data.poster_name}</span>

          <span
            className="see-post-date"
          >Posted on: {formatDate(data.created_at)}</span>
        </div>


        <p
          className="see-post-body"
        >{data.body}</p>



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

        {
          data.spotify_link ? <SpotifyOEmbed url={data.spotify_link}/> : null
        }

        <div className="edit-ctn">
          <Link to={`/edit/${postId}`}>Edit this Post</Link>
        </div>
        
        <br/>

        <div className="add-comment-ctn">
          <h3>Add a coment to this post!</h3>
          <CommentForm id={postId!}/>
        </div>
        
        <br/>

        <div className="comment-list">
          <h3>Comments:</h3>
          {
            comments.length > 0 ? comments.map((comment, index) => {
              return <Comment data={comment} key={index}/>
            })
            :
            <p>No comments yet, why don't you add one?</p>
          }
        </div>
      </div>
    </div>
  )
}

export default SeePost