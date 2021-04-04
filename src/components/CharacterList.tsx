import { resourceLimits } from 'node:worker_threads';
import React from 'react';
import './CharacterList.css';
import { createFragmentContainer, graphql } from 'react-relay';
import { CharacterList_query } from '../__generated__/CharacterList_query.graphql';
import Character from './Character';

interface Props {
  query: CharacterList_query;
}

const CharacterList = ({query}: Props) => {
  const { characters } = query;
  const results = characters?.results;
  return (
    <div className='characterList'>
      {results ? results.map((person) => person ? <Character character={person} /> : ''): 'No persons match the provided criteria'}
    </div>
  )
}

export default createFragmentContainer(CharacterList, {
  query: graphql`fragment CharacterList_query on Query {
    characters {
      results {
        ...Character_character
      }
    }
  }
`});
