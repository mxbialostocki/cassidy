import React, { useState } from 'react'
import { Button, Input, Divider, Table, Header, Form, TextArea } from 'semantic-ui-react'

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
              <Input transparent style={style.extend} value={isbnInputState} onChange={event => setIsbnInputState(event.target.value)} placeholder={isbn}/>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>title</Table.Cell>
            <Table.Cell style={style.val}>
              <Input transparent style={style.extend} value={titleInputState} onChange={event => setTitleInputState(event.target.value)} placeholder={title}/>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>author first name(s)</Table.Cell>
            <Table.Cell style={style.val}>
              <Input transparent style={style.extend} value={authorFirstInputState} onChange={event => setAuthorFirstInputState(event.target.value)} placeholder={authorFirst}/>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>author last name</Table.Cell>
            <Table.Cell style={style.val}>
              <Input transparent style={style.extend} value={authorLastInputState} onChange={event => setAuthorLastInputState(event.target.value)} placeholder={authorLast}/>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>jacket path</Table.Cell>
            <Table.Cell style={style.val}>
              <Input transparent style={style.extend} value={jacketPathInputState} onChange={event => setJacketPathInputState(event.target.value)} placeholder={jacketPath}/>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>imprint</Table.Cell>
            <Table.Cell style={style.val}>
              <Input transparent style={style.extend} value={imprintInputState} onChange={event => setImprintInputState(event.target.value)} placeholder={imprint}/>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>publisher</Table.Cell>
            <Table.Cell style={style.val}>
              <Input transparent style={style.extend} value={publisherInputState} onChange={event => setPublisherInputState(event.target.value)} placeholder={publisher}/>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>publication year</Table.Cell>
            <Table.Cell style={style.val}>
              <Input transparent style={style.extend} value={publicationYearInputState} onChange={event => setPublicationYearInputState(event.target.value)} placeholder={publicationYear}/>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>determination</Table.Cell>
            <Table.Cell style={style.val}>
              <Input transparent style={style.extend} value={determinationInputState} onChange={event => setDeterminationInputState(event.target.value)} placeholder={determination}/>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>review slug</Table.Cell>
            <Table.Cell style={style.val}>
              <Input transparent style={style.extend} value={reviewSlugInputState} onChange={event => setReviewSlugInputState(event.target.value)} placeholder={reviewSlug} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>review body</Table.Cell>
            <Table.Cell style={style.val}>
              <Form>
                <TextArea style={style.extend} value={reviewBodyInputState} onChange={event => setReviewBodyInputState(event.target.value)} placeholder={reviewBody}/>
              </Form>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>reviewer name</Table.Cell>
            <Table.Cell style={style.val}>
              <Input transparent style={style.extend} value={reviewReviewerNameInputState} onChange={event => setReviewReviewerNameInputState(event.target.value)} placeholder={reviewReviewerName}/>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Button style={style.extend} onClick={() => {
        updateRecord(_id, isbnInputState, titleInputState, authorFirstInputState, authorLastInputState, jacketPathInputState, imprintInputState, publisherInputState, publicationYearInputState, determinationInputState, reviewSlugInputState, reviewBodyInputState, reviewReviewerNameInputState)
        setEditing(false)
      }}>
          Update
      </Button>
    </React.Fragment>
  )
}

export default UpdateRecord
