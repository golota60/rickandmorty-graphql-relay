import React, { SetStateAction, useState } from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import Character from './components/Character';
import CharacterList from './components/CharacterList';
import env from './RelayEnv';

const query = graphql`query AppQuery($page: Int) {
  ...CharacterList_query
}`

interface Props {
  error: Error | null;
  props: any;
  setPage: React.Dispatch<SetStateAction<number>>;
  page: number;
}

const renderComponent = ({error, props, setPage, page}: Props) => {
  if (error) {
    return <div>{error.message}</div>;
  } else if(!props) return <div>Loading...</div>
  return <CharacterList query={props} page={page} setPage={setPage} />
}

function App() {
  const [page, setPage] = useState(1);
  return (
    <div className="App">
      <QueryRenderer 
        query={query}
        variables={{page: page}} 
        environment={env as any}
        render={(renderProps) => renderComponent({...renderProps, setPage, page})}
      />
    </div>
  );
}

export default App;
