import React from 'react';
import './Character.css';
import { createFragmentContainer, graphql} from 'react-relay';
import { Character_character } from '../__generated__/Character_character.graphql';

interface Props {
  character: Character_character;
}

const Character = ({character}: Props) => {
  const characterName = character.name!;
  const gender = character.gender!;
  const species = character.species!;
  const imageUrl = character.image || 'https://via.placeholder.com/200';
  return (
    <div className='characterDetails'>
      <img className='characterDetails_image' src={imageUrl} alt={characterName} />
      <p className='characterDetails_name'>{characterName}</p>
      <p className='characterDetails_subtitle'>Gender: {gender}</p>
      <p className='characterDetails_subtitle'>Species: {species}</p>
    </div>
  )
}

export default createFragmentContainer(Character, {
  character: graphql`
    fragment Character_character on Character {
      id
      name
      image
      created
      species
      gender
    }
  `
});