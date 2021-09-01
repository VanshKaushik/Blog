import { useState } from "react";
import { useHistory} from "react-router-dom";
const Create = () => {
    const [title, setTitle] = useState('Start>>')
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    
    const handleSubmit = (e) => {
        
        e.preventDefault();
        const blog = { title, body, author};
        
        setIsPending(true);
        fetch('http://localhost:8000/blogs',
        {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
            
        }).then(()=>
        {   
            setIsPending(false);
            history.push('/');
            
        })

    }
    return (  
        <div className="create">
            <h2>Add a Blog</h2><br />
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label><br />
                <input type = "text"
                 required 
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}
                 /><br /><br />
                 <label>Blog Body:</label><br />
                <input type = "text" style = {{
                    
                    height: "50px",
                    padding: "12px",
                    boxSizing:"border-box",
                    
                }}
                 required
                 value={body}
                 onChange={(e) => setBody(e.target.value)}
                 /><br /><br />
                 <label>Blog Author:</label><br />
                <input type = "text"
                 required
                 value={author}
                 onChange={(e) => setAuthor(e.target.value)}
                 /><br />
                 {!isPending && <button>Add Blog</button>}
                 {isPending && <button disabled>Add Blog</button>}
                 
            </form>
        </div>
    );
}
 
export default Create;