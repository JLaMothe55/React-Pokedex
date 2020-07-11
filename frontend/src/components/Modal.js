import React from 'react';

import Aux from '../utils/Aux';
import classes from './Modal.module.css';

const Modal = (props) => (
    <Aux>
		<div className={classes.Modal}>
			<button className={classes.Button} onClick={props.onClose}>X</button>
        	<div>
            	{props.children}
        	</div>
		</div>
        
    </Aux>
);

export default Modal;