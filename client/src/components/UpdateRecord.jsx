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
            <Table.Cell>isbn</Table.Cell>
            <Table.Cell>
              <Input transparent value={isbnInputState} onChange={event => setIsbnInputState(event.target.value)} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>title</Table.Cell>
            <Table.Cell>
              <Input transparent value={titleInputState} onChange={event => setTitleInputState(event.target.value)} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>author first name(s)</Table.Cell>
            <Table.Cell>
              <Input transparent value={authorFirstInputState} onChange={event => setAuthorFirstInputState(event.target.value)} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>author last name</Table.Cell>
            <Table.Cell>
              <Input transparent value={authorLastInputState} onChange={event => setAuthorLastInputState(event.target.value)} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>jacket path</Table.Cell>
            <Table.Cell>
              <Input transparent value={jacketPathInputState} onChange={event => setJacketPathInputState(event.target.value)} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>imprint</Table.Cell>
            <Table.Cell>
              <Input transparent value={imprintInputState} onChange={event => setImprintInputState(event.target.value)} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>publisher</Table.Cell>
            <Table.Cell>
              <Input transparent value={publisherInputState} onChange={event => setPublisherInputState(event.target.value)} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>publication year</Table.Cell>
            <Table.Cell>
              <Input transparent value={publicationYearInputState} onChange={event => setPublicationYearInputState(event.target.value)} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>determination</Table.Cell>
            <Table.Cell>
              <Input transparent value={determinationInputState} onChange={event => setDeterminationInputState(event.target.value)} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>review slug</Table.Cell>
            <Table.Cell>
              <Input transparent value={reviewSlugInputState} onChange={event => setReviewSlugInputState(event.target.value)} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>review body</Table.Cell>
            <Table.Cell>
              <TextArea width="100%" transparent value={reviewBodyInputState} onChange={event => setReviewBodyInputState(event.target.value)} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>reviewer name</Table.Cell>
            <Table.Cell>
              <Input transparent value={reviewReviewerNameInputState} onChange={event => setReviewReviewerNameInputState(event.target.value)} />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
        <Button onClick={() => {
          updateRecord(_id, isbnInputState, titleInputState, authorFirstInputState, authorLastInputState, jacketPathInputState, imprintInputState, publisherInputState, publicationYearInputState, determinationInputState, reviewSlugInputState, reviewBodyInputState, reviewReviewerNameInputState)
          setEditing(false)
        }}>
          Update
        </Button>
      </Table>
    </React.Fragment>
  )
}

export default UpdateRecord
