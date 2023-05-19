import ReviewForm from "./ReviewForm";
import { useState } from "react";

function Review({ review, handleDelete, handleSubmit }) {
    const [viewEditForm, toggleEditForm] = useState(false);

    const toggleView = () => {
        toggleEditForm(!viewEditForm)
    }

    return (
        <div className="Review">
        <button onClick={toggleView}>Edit this Review</button>
        {viewEditForm ? (
          <ReviewForm
          reviewDetails={review}
          toggleView={toggleView}
          handleSubmit={handleSubmit}
        />
        ) : (
          <div>
            <p><strong>Title:</strong> {review.title}</p>
            <span><strong>Rating:</strong> {review.rating}</span>
            <p><strong>Reviewer Name:</strong> {review.reviewer}</p>
            <p><strong>Review Content: </strong>{review.content}</p>
          </div>
        )}
        <button onClick={() => handleDelete(review.id)}>Delete this Review</button>
      </div>
    );
  }
  
  export default Review;