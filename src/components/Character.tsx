import React from 'react';
import './Character.css';
import { createFragmentContainer, graphql} from 'react-relay';
import { Character_character } from '../__generated__/Character_character.graphql';

interface Props {
  character: Character_character;
}

const Character = ({character}: Props) => {
  const characterName = character.name!;
  const imageUrl = character.image || 'https://via.placeholder.com/200';
  return (
    <div className='characterDetails'>
      <img className='characterDetails_image' src={imageUrl} alt={characterName} />
      {characterName}
    </div>
  )
}

export default createFragmentContainer(Character, {
  character: graphql`
    fragment Character_character on Character {
      name
      image
    }
  `
});