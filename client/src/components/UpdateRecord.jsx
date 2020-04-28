import React, { useState } from 'react'
import { Button, Input, Divider, Table, Header, TextArea } from 'semantic-ui-react'

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
    key: {
      width: '15%'
    },
    val: {
      width: '85%'
    },
    primaryButton: {
      width: '100%'
    },
    primaryTextArea: {
      width: '100%'
    }
  }

  return (
    <React.Fragment>
      <Divider horizontal>
        <Header as='h4'>
          {title} by {authorFirst} {authorLast}
        </Header>
      </Divider>
      <Table definition>
        <Table.Body>
          <Table.Row>
            <Table.Cell style={style.key}>isbn</Table.Cell>
            <Table.Cell style={style.val}>
              <Input transparent value={isbnInputState} onChange={event => setIsbnInputState(event.target.value)} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>title</Table.Cell>
            <Table.Cell style={style.val}>
              <Input transparent value={titleInputState} onChange={event => setTitleInputState(event.target.value)} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>author first name(s)</Table.Cell>
            <Table.Cell style={style.val}>
              <Input transparent value={authorFirstInputState} onChange={event => setAuthorFirstInputState(event.target.value)} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>author last name</Table.Cell>
            <Table.Cell style={style.val}>
              <Input transparent value={authorLastInputState} onChange={event => setAuthorLastInputState(event.target.value)} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>jacket path</Table.Cell>
            <Table.Cell style={style.val}>
              <Input transparent value={jacketPathInputState} onChange={event => setJacketPathInputState(event.target.value)} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>imprint</Table.Cell>
            <Table.Cell style={style.val}>
              <Input transparent value={imprintInputState} onChange={event => setImprintInputState(event.target.value)} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>publisher</Table.Cell>
            <Table.Cell style={style.val}>
              <Input transparent value={publisherInputState} onChange={event => setPublisherInputState(event.target.value)} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>publication year</Table.Cell>
            <Table.Cell style={style.val}>
              <Input transparent value={publicationYearInputState} onChange={event => setPublicationYearInputState(event.target.value)} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>determination</Table.Cell>
            <Table.Cell style={style.val}>
              <Input transparent value={determinationInputState} onChange={event => setDeterminationInputState(event.target.value)} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>review slug</Table.Cell>
            <Table.Cell style={style.val}>
              <Input transparent value={reviewSlugInputState} onChange={event => setReviewSlugInputState(event.target.value)} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>review body</Table.Cell>
            <Table.Cell style={style.val}>
              <TextArea style={style.primaryTextArea} transparent value={reviewBodyInputState} onChange={event => setReviewBodyInputState(event.target.value)} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>reviewer name</Table.Cell>
            <Table.Cell style={style.val}>
              <Input transparent value={reviewReviewerNameInputState} onChange={event => setReviewReviewerNameInputState(event.target.value)} />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Button style={style.primaryButton} onClick={() => {
        updateRecord(_id, isbnInputState, titleInputState, authorFirstInputState, authorLastInputState, jacketPathInputState, imprintInputState, publisherInputState, publicationYearInputState, determinationInputState, reviewSlugInputState, reviewBodyInputState, reviewReviewerNameInputState)
        setEditing(false)
      }}>
          Update
      </Button>
    </React.Fragment>
  )
}

export default UpdateRecord
