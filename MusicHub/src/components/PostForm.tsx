import './../themes/CreatePost.css'

interface PostFormProps {
  data: any;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  submit: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}
// Style like this: https://elementor.com/blog/wp-content/uploads/elementor/thumbs/presidio-booking-form-example-p6kr1nl14nvjk8eel8hwrfn1uc2wwg1np4fb5oez7g.png
const PostForm = ({data, handleChange, submit}: PostFormProps) => {
  return (
    <form className='create-form'>
      <div className="create-ctn">
        <div className="left-block">
          <input 
            className='form-input name'
            type="text" 
            id="poster_name" 
            name="poster_name" 
            value={data.poster_name} 
            onChange={handleChange} 
            placeholder="Name (optional)"
            />

          <input 
            className='form-input title'
            type="text" 
            id="title" 
            name="title" 
            value={data.title} 
            onChange={handleChange} 
            placeholder="Title"
            />

          <input 
            className='form-input spotify'
            type="text" 
            id="spotify_link" 
            name="spotify_link" 
            value={data.spotify_link} 
            onChange={handleChange} 
            placeholder="Spotify Song Link (optional)"
            />
        </div>

        <textarea 
          className='form-input body'
          rows={5} 
          cols={40} 
          name="body" 
          value={data.body} 
          onChange={handleChange}
          placeholder="Write your Body"
          />
      </div>
      
      <input 
        className='submit'
        type="submit" 
        value="Submit" 
        onClick={submit} 
      />
    </form>
  )
}

export default PostForm