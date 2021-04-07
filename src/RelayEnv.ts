import { Environment, Network, RecordSource, RequestParameters, Store, Variables } from "relay-runtime";

const store = new Store(new RecordSource());

const network = Network.create((operation: RequestParameters, variables: Variables) => fetch('https://rickandmortyapi.com/graphql', {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({query: operation.text, variables})
}).then(async (response) => { 
    const respParsed = await response.json(); 
    console.log('req')
    return respParsed;
}))

const env = new Environment({network, store});

export default env;