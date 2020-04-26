import React from 'react'

const Review = ({ record }) => {
  const { isbn, title, authorFirst, authorLast, jacketPath, imprint, publisher, publicationYear, determination, reviewSlug, reviewBody, reviewReviewerName } = record
  // const thisRecord = _id
  return (
    <React.Fragment>
      <div className="ui container">
        <img src={jacketPath} />
        <p>
          {title}
        </p>
        <p>
          by {authorFirst} {authorLast}
        </p>
      </div>
      <div className="ui text container">
        <p>
          isbn {isbn}
        </p>
        <p>
          {imprint}, {publisher}, {publicationYear}
        </p>
        <p>
          {determination}
        </p>
      </div>
      <div className="ui text container">
        <p>
          {reviewSlug}
        </p>
        <p>
          review by: {reviewReviewerName}
        </p>
        <p>
          {reviewBody}
        </p>
      </div>
    </React.Fragment>
  )
}

export default Review
