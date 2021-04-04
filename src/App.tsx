import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import Character from './components/Character';
import CharacterList from './components/CharacterList';
import env from './RelayEnv';

const query = graphql`query AppQuery {
  ...CharacterList_query
}`

interface Props {
  error: Error | null;
  props: any;
}

const renderComponent = ({error, props}: Props) => {
  console.log('proprs', props)
  if (error) {
    return <div>{error.message}</div>;
  } else if(!props) return <div>Loading...</div>
  return <CharacterList query={props} />
}

function App() {
  return (
    <div className="App">
      <QueryRenderer 
        query={query}
        variables={{}} 
        environment={env as any}
        render={renderComponent}
      />
    </div>
  );
}

export default App;
