import { Environment, Network, RecordSource, Store } from 'relay-runtime'

// const port = process.env.PORT || 4000

function fetchQuery (operation, variables) {
  return fetch(window.location.host + '/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json()
  })
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
})

export default environment
