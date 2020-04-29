import React from 'react'

import Review from './Review'
import NavReview from './NavReview'

const ReviewDisplayFrame = ({ records }) => {

  const randomTitle = Math.floor(Math.random() * records.length)

  const style = {
    width: '70vw',
    padding: '150px'
  }

  return (
    <React.Fragment style={style}>
      <Review record={records[randomTitle]}/>
      <NavReview />
    </React.Fragment>
  )
}

export default ReviewDisplayFrame
