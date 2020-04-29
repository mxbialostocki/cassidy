import React from 'react'

import { Item } from 'semantic-ui-react'
import { Typography, Container } from '@material-ui/core'

const Review = ({ record }) => {
  const { _id, isbn, title, authorFirst, authorLast, jacketPath, imprint, publisher, publicationYear, determination, reviewSlug, reviewBody, reviewReviewerName } = record
  // const thisRecord = {
  //   _id,
  //   isbn,
  //   determination
  // }
  const style = {
    textAlign: 'left',
    width: '60vw',
    margin: '0 auto',
    heading: {
      fontSize: '3em',
      lineHeight: '1.1em'
    },
    title: {
      fontSize: '2em'
    },
    body: {
      fontSize: '1.2em'
    }
  }

  return (
    <React.Fragment>
      <Container>
        <Typography>
          <Item style={style}>
            <Item.Image size='medium' src={jacketPath} />
          </Item>
        </Typography>
        <Typography>
          <Item.Content>
            <Typography variant='h2' style={style.heading}>{reviewSlug}</Typography>
            <Item.Meta style={style.title}>{title} by {authorFirst} {authorLast}</Item.Meta>
            <Item.Meta>{imprint}, {publisher} ({publicationYear})</Item.Meta>
            <Item.Description style={style.body }>
              {reviewBody}
            </Item.Description>
            <Item.Extra>review by {reviewReviewerName}</Item.Extra>
          </Item.Content>
        </Typography>
      </Container>
      <Item.Group>

      </Item.Group>
    </React.Fragment>
  )
}

export default Review
