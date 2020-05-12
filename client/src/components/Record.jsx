import React, { useState } from 'react'
import { Button, Typography, Table, TableBody, TableRow, TableCell } from '@material-ui/core'

// import deleteRecordMutation from '../graphql/mutations/deleteRecord'
import UpdateRecord from './UpdateRecord'

const Record = ({ record }) => {
  const { _id, isbn, title, authorFirst, authorLast, jacketPath, imprint, publisher, publicationYear, determination, reviewSlug, reviewBody, reviewReviewerName } = record
  const [ editing, setEditing ] = useState(false)
  const buttonLabel = editing ? 'cancel' : 'edit'

  return (
    <React.Fragment>
      <Typography style={{ fontSize: '2em' }}>{title} by {authorFirst} {authorLast}</Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell style={{ width: '15%' }}>isbn</TableCell>
            <TableCell style={{ width: '85%' }}>{isbn}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>title</TableCell>
            <TableCell>{title}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>author first name(s)</TableCell>
            <TableCell>{authorFirst}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>author last name</TableCell>
            <TableCell>{authorLast}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>jacket path</TableCell>
            <TableCell><img src={jacketPath} style={{ width: '100%', maxWidth: '300px' }}/></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>imprint</TableCell>
            <TableCell>{imprint}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>publisher</TableCell>
            <TableCell>{publisher}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>publication year</TableCell>
            <TableCell>{publicationYear}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>determination</TableCell>
            <TableCell>{determination}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>review slug</TableCell>
            <TableCell>{reviewSlug}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>review body</TableCell>
            <TableCell>{reviewBody}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>reviewer name</TableCell>
            <TableCell>{reviewReviewerName}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {/* <Button variant='outlined' style={style.btn} onClick={() => {
        deleteRecordMutation(_id)
      }}
      >
        Delete
      </Button> */}
      <Button variant='outlined' style={{ fontSize: '2em', margin: '1em 0', width: '100%' }} onClick={() => {
        setEditing(!editing)
      }}>
        {buttonLabel}
      </Button>
      {editing && <UpdateRecord record={record} setEditing={setEditing}/>}
    </React.Fragment>
  )
}

export default Record
