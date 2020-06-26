import React from 'react';

import Aux from '../utils/Aux';

const Modal = (props) => (
    <Aux>
        <button onClick={props.onClose}>Close</button>
        <div>
            {props.children}
        </div>
    </Aux>
);

export default Modal;