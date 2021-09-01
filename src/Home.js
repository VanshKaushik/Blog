import BlogList from "./Bloglist";
import useFetch from "./usefetch";
const Home = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    
    return ( 
       <div className ="home">
           <h2>Homepage</h2><br /><br />
           {error && <div>{error}</div>}
           {isPending && <div>Loading....</div>}
           {blogs && <BlogList blogs = {blogs} title = "ALL BLOGS" />}
        </div> 
     );
}
 
export default Home;