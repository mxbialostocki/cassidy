import React, { useState } from 'react'
import { Divider } from 'semantic-ui-react'
import { Button, Input, Table, TableBody, TableRow, TableCell } from '@material-ui/core'

import updateRecord from '../graphql/mutations/updateRecord'

const UpdateRecord = ({ record, setEditing }) => {
  const { _id, isbn, title, authorFirst, authorLast, jacketPath, imprint, publisher, publicationYear, determination, reviewSlug, reviewBody, reviewReviewerName } = record

  const [ isbnInputState, setIsbnInputState ] = useState(isbn)
  const [ titleInputState, setTitleInputState ] = useState(title)
  const [ authorFirstInputState, setAuthorFirstInputState ] = useState(authorFirst)
  const [ authorLastInputState, setAuthorLastInputState ] = useState(authorLast)
  const [ jacketPathInputState, setJacketPathInputState ] = useState(jacketPath)
  const [ imprintInputState, setImprintInputState ] = useState(imprint)
  const [ publisherInputState, setPublisherInputState ] = useState(publisher)
  const [ publicationYearInputState, setPublicationYearInputState ] = useState(publicationYear)
  const [ determinationInputState, setDeterminationInputState ] = useState(determination)
  const [ reviewSlugInputState, setReviewSlugInputState ] = useState(reviewSlug)
  const [ reviewBodyInputState, setReviewBodyInputState ] = useState(reviewBody)
  const [ reviewReviewerNameInputState, setReviewReviewerNameInputState ] = useState(reviewReviewerName)

  const style = {
    extend: {
      width: '100%'
    },
    key: {
      width: '15%'
    },
    val: {
      width: '85%'
    },
    btn: {
      margin: '15px 0',
      padding: '5px',
      width: '100%'
    }
  }

  return (
    <React.Fragment>
      <Divider horizontal>
        <h3>
          {title} by {authorFirst} {authorLast}
        </h3>
      </Divider>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell style={style.key}>isbn</TableCell>
            <TableCell style={style.val}>
              <Input disableUnderline style={style.extend} value={isbnInputState} onChange={event => setIsbnInputState(event.target.value)} placeholder={isbn}/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={style.key}>title</TableCell>
            <TableCell style={style.val}>
              <Input disableUnderline style={style.extend} value={titleInputState} onChange={event => setTitleInputState(event.target.value)} placeholder={title}/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={style.key}>author first name(s)</TableCell>
            <TableCell style={style.val}>
              <Input disableUnderline style={style.extend} value={authorFirstInputState} onChange={event => setAuthorFirstInputState(event.target.value)} placeholder={authorFirst}/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={style.key}>author last name</TableCell>
            <TableCell style={style.val}>
              <Input disableUnderline style={style.extend} value={authorLastInputState} onChange={event => setAuthorLastInputState(event.target.value)} placeholder={authorLast}/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={style.key}>jacket path</TableCell>
            <TableCell style={style.val}>
              <Input disableUnderline style={style.extend} value={jacketPathInputState} onChange={event => setJacketPathInputState(event.target.value)} placeholder={jacketPath}/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={style.key}>imprint</TableCell>
            <TableCell style={style.val}>
              <Input disableUnderline style={style.extend} value={imprintInputState} onChange={event => setImprintInputState(event.target.value)} placeholder={imprint}/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={style.key}>publisher</TableCell>
            <TableCell style={style.val}>
              <Input disableUnderline style={style.extend} value={publisherInputState} onChange={event => setPublisherInputState(event.target.value)} placeholder={publisher}/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={style.key}>publication year</TableCell>
            <TableCell style={style.val}>
              <Input disableUnderline style={style.extend} value={publicationYearInputState} onChange={event => setPublicationYearInputState(event.target.value)} placeholder={publicationYear}/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={style.key}>determination</TableCell>
            <TableCell style={style.val}>
              <Input disableUnderline style={style.extend} value={determinationInputState} onChange={event => setDeterminationInputState(event.target.value)} placeholder={determination}/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={style.key}>review slug</TableCell>
            <TableCell style={style.val}>
              <Input disableUnderline style={style.extend} value={reviewSlugInputState} onChange={event => setReviewSlugInputState(event.target.value)} placeholder={reviewSlug} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={style.key}>review body</TableCell>
            <TableCell style={style.val}>
              <Input disableUnderline multiline style={style.extend} value={reviewBodyInputState} onChange={event => setReviewBodyInputState(event.target.value)} placeholder={reviewBody}/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={style.key}>reviewer name</TableCell>
            <TableCell style={style.val}>
              <Input disableUnderline style={style.extend} value={reviewReviewerNameInputState} onChange={event => setReviewReviewerNameInputState(event.target.value)} placeholder={reviewReviewerName}/>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button variant='outlined' style={style.btn} onClick={() => {
        updateRecord(_id, isbnInputState, titleInputState, authorFirstInputState, authorLastInputState, jacketPathInputState, imprintInputState, publisherInputState, publicationYearInputState, determinationInputState, reviewSlugInputState, reviewBodyInputState, reviewReviewerNameInputState)
        setEditing(false)
      }}>
          Update
      </Button>
    </React.Fragment>
  )
}

export default UpdateRecord
