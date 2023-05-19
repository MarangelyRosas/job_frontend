import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function JobEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [job, setJob] = useState({   
    title: "", 
    description: "", 
    company: "", 
    location: "", 
    salary: 0, 
    url: "", 
    is_favorite: false,
  });

  const updateJob = (updatedJob) => {
    axios
      .put(`${API}/jobs/${id}`, updatedJob)
      .then(
        () => {
          navigate(`/jobs/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setJob({ ...job, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setJob({ ...job, is_favorite: !job.is_favorite });
  };

  useEffect(() => {
    axios
    .get(`${API}/jobs/${id}`)
    .then((response) => 
      setJob(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateJob(job, id);
  };
  
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={job.title}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Job Position"
          required
        />

        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          name="description"
          value={job.description}
          placeholder="As an employee ..."
          onChange={handleTextChange}
          required
        />

        <label htmlFor="company">Company:</label>
        <input
          id="company"
          value={job.company}
          type="text"
          onChange={handleTextChange}
          placeholder="Google, Uber, Apple, ..."
          required
        />

        <label htmlFor="location">Location:</label>
        <input
          id="location"
          type="text"
          name="location"
          value={job.location}
          placeholder="New York, New Jersey, Connecticut, ..."
          onChange={handleTextChange}
          required
        />

        <label htmlFor="salary">Salary:</label>
        <input
          id="salary"
          type="text"
          name="salary"
          value={job.salary}
          placeholder="150000"
          onChange={handleTextChange}
          required
        />

        <label htmlFor="url">URL:</label>
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={job.url}
          placeholder="http://"
          onChange={handleTextChange}
        />
      
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={job.is_favorite}
        />

        <br />

        <input type="submit" />
      </form>
      <Link to={`/jobs/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default JobEditForm;