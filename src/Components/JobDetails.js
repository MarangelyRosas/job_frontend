import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Reviews from "./Reviews";

const API = process.env.REACT_APP_API_URL;

function JobDetails() {
  const [job, setJob] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}/jobs/${id}`)
    .then((response) => {
      console.log(response.data);
      setJob(response.data);
    })
    .catch((e) => {
      console.warn("catch:", e)
    });
  }, [id]);

  const handleDelete = () => {
    // console.log("I deleted a job");
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
        <article>
            <h2>
                {job.is_favorite ? <span>⭐️</span> : null} {job.title}
            </h2>
            <h5>
                <span>
                <a href={job.url}>👉🏽 Click Here to Apply! 👈🏽</a>
                </span>
            </h5>
            <p><strong>Description:</strong> {job.description}</p>
            <p><strong>Company:</strong> {job.company} &nbsp; &nbsp; &nbsp;&nbsp; <strong>Location: </strong>{job.location} 📍 &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; <strong>Salary:</strong> 💲{job.salary}.00/yr 💸</p>
            <br></br>
            <div className="showNavigation">
                <div>
                    <Link to={`/jobs`}>
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
                <br></br>
                <br></br>
                <Reviews />
            </div>
        </article>
    );
}

export default JobDetails;

