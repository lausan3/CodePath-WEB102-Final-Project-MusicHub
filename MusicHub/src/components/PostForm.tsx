interface AgentFormProps {
  data: any;
  selectedOption: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleOptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  submit: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

const PostForm = ({data, selectedOption, handleChange, handleOptionChange, submit}: AgentFormProps) => {
  return (
    <form className='create-form'>
      <label htmlFor="title">Title</label><br />
      <input type="text" id="title" name="name" value={data.name} onChange={handleChange} />
      <br/>
      <br/>

      <label htmlFor="body">Body</label><br />
      <textarea rows={5} cols={50} name="body" value={data.description} onChange={handleChange}>
      </textarea>
      <br/>
      
      <div className="create-form-role">

        <div>
          <input
            className="create-form-role-radio"
            id="duelist"
            type="radio"
            name="role"
            value="Duelist"
            checked={selectedOption === 'Duelist'}
            onChange={handleOptionChange}
          />
          <label className="create-form-role-label" htmlFor="duelist">Duelist</label>
        </div>
        <div>
          <input
            className="create-form-role-radio"
            id="initiator"
            type="radio"
            name="role"
            value="Initiator"
            checked={selectedOption === 'Initiator'}
            onChange={handleOptionChange}
          />
          <label className="create-form-role-label" htmlFor="initiator">Initiator</label>
        </div>
        <div>
          <input
            className="create-form-role-radio"
            id="controller"
            type="radio"
            name="role"
            value="Controller"
            checked={selectedOption === 'Controller'}
            onChange={handleOptionChange}
          />
          <label className="create-form-role-label" htmlFor="controller">Controller</label>
        </div>
        <div>

          <input
            className="create-form-role-radio"
            id="sentinel"
            type="radio"
            name="role"
            value="Sentinel"
            checked={selectedOption === 'Sentinel'}
            onChange={handleOptionChange}
          />
          <label className="create-form-role-label" htmlFor="sentinel">Sentinel</label>
        </div>

      </div>

      <input type="submit" value="Submit" onClick={submit} />
    </form>
  )
}

export default PostForm