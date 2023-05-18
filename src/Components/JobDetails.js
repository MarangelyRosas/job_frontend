import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
//import Reviews from "./Reviews";

const API = process.env.REACT_APP_API_URL
 
function JobDetails() {
  const [job, setJob] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}/jobs/${id}`)
    .then((response) => {
      console.log(response.data)
      setJob(response.data)
    })
    .catch((e) => {
      console.warn("catch:", e)
    })
  }, [id]);

  const handleDelete = () => {
    // console.log("I clicked delete");
    deleteJob();
  };

  const deleteJob = () => {
    axios
      .delete(`${API}/jobs/${id}`)
      .then(() => {
        navigate(`/jobs`);
      })
      .catch((e) => {
        console.warn("catch:", e);
      });
  };

  return (
    <article className="job-Info">
        <div className="job-details">
            <h2 className="job-title">
             {job.is_favorite && <span>⭐️</span>} {job.title}
            </h2>
            <h5 className="job-link">
             <span><a href="{job.url}">Apply Here!</a></span>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </h5>
            <h6 className="job-description">{job.description}</h6>
            <h6 className="job-company">
             Company: {job.company}  Location: {job.location}
            </h6>
        </div>
        <div className="jobDetails-navigation">
            <div className="button-container">
            <div>
                <Link to="/jobs">
                    <button>Back</button>
                </Link>
            </div>
            <div>
                <Link to={`/jobs/${id}/edit`}>
                    <button>Edit</button>
                </Link>
            </div>
            <div>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
        </div>

        <br></br>
        {/* <Reviews /> */}
    </article>
  );
}
  
export default JobDetails;
