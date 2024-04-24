export interface PostData {
  poster_name: string,
  title: string,
  body: string,
  spotify_link: string,
  upvotes: number,
}

export interface CommentData {
  poster_name: string,
  body: string,
  post_id: string
}

export interface DBPostData {
  id: number,
  poster_name: string,
  title: string,
  body: string,
  spotify_link: string,
  upvotes: number,
  created_at: string,
}

export interface DBCommentData {
  id: number,
  poster_name: string,
  body: string,
  upvotes: number,
  created_at: string,
  post_id: number
}