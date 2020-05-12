import React, { useState } from 'react'
import { Button } from '@material-ui/core'

import Record from './Record.jsx'

const DisplayRecords = ({ records }) => {

  const [sortFilter, setSortFilter] = useState('dateCreated')
  const sortedRecords = records.slice().sort((a, b) => a[sortFilter] - b[sortFilter])

  const buttonFilter = sortFilter === 'dateCreated' ? 'dateModified' : 'dateCreated'

  return (
    <React.Fragment>
      <Button variant="outlined" style={{ width: '100%' }} onClick={() => setSortFilter(buttonFilter)}>Sort!</Button>
      {sortedRecords.map(record => {
        return <Record key={record._id} record={record} />
      })}
    </React.Fragment>
  )
}

export default DisplayRecords
