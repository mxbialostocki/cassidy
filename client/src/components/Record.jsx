import React, { useState } from 'react'
import { Divider } from 'semantic-ui-react'
import { Button, Typography, Table, TableBody, TableRow, TableCell } from '@material-ui/core'

import deleteRecordMutation from '../graphql/mutations/deleteRecord'
import UpdateRecord from './UpdateRecord'

const Record = ({ record }) => {
  const { _id, isbn, title, authorFirst, authorLast, jacketPath, imprint, publisher, publicationYear, determination, reviewSlug, reviewBody, reviewReviewerName } = record
  const [ editing, setEditing ] = useState(false)
  const buttonLabel = editing ? 'cancel' : 'edit'

  const style = {
    key: {
      width: '15%'
    },
    val: {
      width: '85%'
    },
    jacket: {
      width: '100%',
      maxWidth: '300px'
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
        <Typography style={{ fontSize: '2em' }}>{title} by {authorFirst} {authorLast}</Typography>
      </Divider>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell style={style.key}>isbn</TableCell>
            <TableCell style={style.val}>{isbn}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={style.key}>title</TableCell>
            <TableCell style={style.val}>{title}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={style.key}>author first name(s)</TableCell>
            <TableCell style={style.val}>{authorFirst}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={style.key}>author last name</TableCell>
            <TableCell style={style.val}>{authorLast}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={style.key}>jacket path</TableCell>
            <TableCell style={style.val}><img src={jacketPath} style={style.jacket}/></TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={style.key}>imprint</TableCell>
            <TableCell style={style.val}>{imprint}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={style.key}>publisher</TableCell>
            <TableCell style={style.val}>{publisher}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={style.key}>publication year</TableCell>
            <TableCell style={style.val}>{publicationYear}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={style.key}>determination</TableCell>
            <TableCell style={style.val}>{determination}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={style.key}>review slug</TableCell>
            <TableCell style={style.val}>{reviewSlug}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={style.key}>review body</TableCell>
            <TableCell style={style.val}>{reviewBody}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={style.key}>reviewer name</TableCell>
            <TableCell style={style.val}>{reviewReviewerName}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button variant='outlined' style={style.btn} onClick={() => {
        deleteRecordMutation(_id)
      }}
      >
        Delete
      </Button>
      <Button variant='outlined' style={style.btn} onClick={() => {
        setEditing(!editing)
      }}>
        {buttonLabel}
      </Button>
      {editing && <UpdateRecord record={record} setEditing={setEditing}/>}
    </React.Fragment>
  )
}

export default Record
