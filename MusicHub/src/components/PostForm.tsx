interface PostFormProps {
  data: any;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  submit: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}
// Style like this: https://elementor.com/blog/wp-content/uploads/elementor/thumbs/presidio-booking-form-example-p6kr1nl14nvjk8eel8hwrfn1uc2wwg1np4fb5oez7g.png
const PostForm = ({data, handleChange, submit}: PostFormProps) => {
  return (
    <form className='create-form'>
      <input 
        type="text" 
        id="poster_name" 
        name="poster_name" 
        value={data.poster_name} 
        onChange={handleChange} 
        placeholder="Enter your name (optional)"
      />
      <br/>
      <br/>


      <input 
        type="text" 
        id="title" 
        name="title" 
        value={data.title} 
        onChange={handleChange} 
        placeholder="Enter a title"
      />
      <br/>
      <br/>

      <textarea 
        rows={5} 
        cols={50} 
        name="body" 
        value={data.body} 
        onChange={handleChange}
        placeholder="Text (required)"
        />
      <br/>
      
      <input 
        type="text" 
        id="spotify_link" 
        name="spotify_link" 
        value={data.spotify_link} 
        onChange={handleChange} 
        placeholder="Enter a Spotify Song Link (optional)"
      />
      <br/>


      <input type="submit" value="Submit" onClick={submit} />
    </form>
  )
}

export default PostForm