import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function JobNewForm() {
  let navigate = useNavigate();

  const addJob = (newJob) => {
    axios
      .post(`${API}/jobs`, newJob)
      .then(
        () => {
          navigate(`/jobs`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [job, setJob] = useState({
    title: "", 
    description: "", 
    company: "", 
    location: "", 
    salary: 0, 
    url: "", 
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setJob({ ...job, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setJob({ ...job, is_favorite: !job.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addJob(job);
  };

  return (
    <div className="New">
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
    </div>
  );
}

export default JobNewForm;