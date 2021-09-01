import { useHistory, useParams } from "react-router-dom";

import useFetch from "./usefetch";

const BlogDetails = () => {
    const { id } =useParams();
    const {data: blog, error,isPending} = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory();
   
    const handleDelete =() =>
    {
            fetch('http://localhost:8000/blogs/' + blog.id,{
                method:'DELETE'
            }).then(()=>
            {
                history.push('/');
            })
    }
    
    return (
        <div className ="blog-details">
             {error && <div>{error}</div>}
             {isPending && <div>Loading....</div>}
            { blog && (
             <article><h2>
               { blog.title }
            </h2><br /> <br />
            <h3>Written By: <u>{blog.author}</u></h3>
            <br />
            <div style = {{fontSize:"17px"}}>{blog.body}</div><br></br>
            <button onClick={handleDelete}
            style = {{backgroundColor : "#f1356d", color : "white", height: "30px" }}
            >Delete</button>
            <br></br><br></br>
            
        
            </article>)}
        </div>
    );
}
export default BlogDetails;