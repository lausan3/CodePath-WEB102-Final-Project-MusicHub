export const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>, set: React.Dispatch<React.SetStateAction<string>>) => {
  set(event.target.value);
};

export const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, set: React.Dispatch<React.SetStateAction<any>>) => {
  const {name, value} = event.target;
  set( (prev: any) => {
    return {
      ...prev,
      [name]:value,
    }
  })
}