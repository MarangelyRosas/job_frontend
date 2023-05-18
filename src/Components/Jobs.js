import axios from "axios";
import { useState, useEffect } from "react";
import Job from "./Job.js"

const API = process.env.REACT_APP_API_URL;

function Jobs() {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        axios
        .get(`${API}/jobs`)
        .then((response) => {
            setJobs(response.data)
        }).catch((e) => {
            console.warn('catch', e)
        });
    }, []);
    return (
        <div className="Jobs">
            <section className="Job-Grid">
                {jobs.map((job) => {
                    return <Job key={job.id} job={job} />;
                })}
            </section>
        </div>
    );
};

export default Jobs;
