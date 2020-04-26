import React from 'react'

import Review from './Review'
import NavReview from './NavReview'

const ReviewDisplayFrame = ({ records }) => {

  const randomTitle = Math.floor(Math.random() * records.length)

  return (
    <React.Fragment>
      <Review record={records[randomTitle]}/>
      <NavReview />
    </React.Fragment>
  )
}

export default ReviewDisplayFrame
