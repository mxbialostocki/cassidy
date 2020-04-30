import React, { useState } from 'react'
import { Button } from '@material-ui/core'

import Record from './Record.jsx'

const DisplayRecords = ({ records }) => {

  const [sortFilter, setSortFilter] = useState('dateCreated')
  const sortedRecords = records.slice().sort((a, b) => a[sortFilter] - b[sortFilter])

  const buttonFilter = sortFilter === 'dateCreated' ? 'dateModified' : 'dateCreated'

  const style = {
    btn: {
      margin: '15px 0',
      padding: '5px',
      width: '100%'
    }
  }

  return (
    <React.Fragment>
      <Button variant="outlined" style={style.btn} onClick={() => setSortFilter(buttonFilter)}>Sort!</Button>
      {sortedRecords.map(record => {
        return <Record key={record._id} record={record} />
      })}
    </React.Fragment>
  )
}

export default DisplayRecords
