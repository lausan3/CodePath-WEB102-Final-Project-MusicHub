// import { useState, useEffect } from "react"
// import { useParams } from "react-router-dom"
// import { supabase } from "../client"
// import { DBPostData } from "../utils/interface"

// interface Props {

// }

// const EditPost = ({}: Props) => {
//   const params = useParams();
//   const postId = params.id;

//   const [data, setData] = useState<DBPostData[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const newData = await supabase
//         .from("Posts")
//         .select()
//         .eq("id", postId);

//       const { data, error } = newData;
  
//       if (error) {
//         console.error('Error fetching data:', error);
//       } else {
//         setData(data);
//       }
//     }

//     fetchData().catch(console.error);
//   }, []);

//   return (
//     <div
    
//     >

//     </div>
//   )
// }

// export default EditPost