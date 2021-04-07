import React, { SetStateAction } from 'react';
import './CharacterList.css';
import { createFragmentContainer, graphql } from 'react-relay';
import { CharacterList_query } from '../__generated__/CharacterList_query.graphql';
import Character from './Character';

interface Props {
  query: CharacterList_query;
  page: number;
  setPage: React.Dispatch<SetStateAction<number>>;
}

const CharacterList = ({query, page, setPage}: Props) => {
  const { characters } = query;
  const results = characters?.results;
  const info = characters?.info;
  const handlePrevPage = () => setPage(page - 1);
  const handleNextPage = () => setPage(page + 1);
  return (
    <div className='characterList'>
    <p>Amount of people: {info?.count}</p>
    <p>Pages: {info?.pages}</p>
    <p>You're viewing page {page}</p>
    <button disabled={page === 1} onClick={handlePrevPage}>View previous</button>
    <button disabled={info?.pages === page} onClick={handleNextPage}>View next</button>
    {results ? results.map((person, i) => person ? <Character character={person} key={i} /> : ''): 'No persons match the provided criteria'}
    </div>
  )
}

export default createFragmentContainer(CharacterList, {
  query: graphql`fragment CharacterList_query on Query {
    characters(page: $page) {
      results {
        ...Character_character
      }
      info {
        count
        pages
        next
        prev
      }
    }
  }
`});
