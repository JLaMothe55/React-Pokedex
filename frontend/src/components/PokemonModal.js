import React from 'react';

import Modal from './Modal';
import Pokemon from "../containers/Pokemon";

const PokemonModal = (props) => (
    <Modal onClose={props.onCloseClick}>
        <Pokemon pokemon={props.pokemon} />
    </Modal>
);

export default PokemonModal;