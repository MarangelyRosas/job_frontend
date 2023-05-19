import { Link } from "react-router-dom";

function Job({ job }) {
    return (
        <tr>
            <td>
                {job.is_favorite ? (
                    <span>⭐️</span>
                ) : (
                    <span>&nbsp; &nbsp; &nbsp;</span>
                )}
            </td>
            <td>
                <a href={job.url} target="_blank" rel="noreferrer">
                    {job.title}
                </a>
            </td>
            <td>
                <Link to={`/jobs/${job.id}`}>🔗</Link>
            </td>
        </tr>
    );
}
  
export default Job;












//     return (
//         <div className="Job-Details">
//           <h3>{job.title}</h3>
//           <h4>Description: {job.description}</h4>
//           <h3>Company: {job.company}</h3>
//           <p>Location: {job.location}</p>
//           <p>Salary: ${job.salary}.00</p>
//           <p>URL: {job.url}</p>
//           <p>
//             Is Favorite?{" "}
//             {job.is_favorite ? (
//               <span>⭐️</span>
//             ) : (
//               <span>&nbsp; &nbsp; &nbsp;</span>
//             )}
//           </p>
//           <Link to={`/jobs/${job.id}`}>Details</Link>
//         </div>
//     );
