import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found" >
      <h2 style ={{marginTop:"50px", display: "flex",alignItems: "center", justifyContent: "center", fontSize: "30px" }}>Sorry</h2><br/>
      <p style ={{ display: "flex",alignItems: "center", justifyContent: "center",fontSize: "20px" }}>That page cannot be found</p><br/>
      <Link to="/" style = {{ display: "flex",alignItems: "center", justifyContent: "center",textDecoration : "none", color: "red", fontSize: "20px"}}>Back to the homepage...</Link>
    </div>
  );
}
 
export default NotFound;