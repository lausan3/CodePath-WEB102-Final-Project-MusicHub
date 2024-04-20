export const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>, set: React.Dispatch<React.SetStateAction<string>>) => {
  set(event.target.value);
};

export const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, set: React.Dispatch<React.SetStateAction<any>>) => {
  console.log(event.target.value)
  
  const {name, value} = event.target;
  set( (prev: any) => {
    return {
      ...prev,
      [name]:value,
    }
  })
}

export const formatDate = (dateString: string) => {
  const date = new Date(dateString).toLocaleDateString();
  const time = new Date(dateString).toLocaleTimeString();
  return `${date} at ${time}`;
}