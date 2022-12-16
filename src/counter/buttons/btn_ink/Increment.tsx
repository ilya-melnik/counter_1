import React from 'react';
import s from './Increment.module.css'

type IncrementType = {
    callback: () => void
    inc: number
}

const Increment = (props: IncrementType) => {
    return (
        <div>
            <button disabled={props.inc === 5} onClick={props.callback} className={s.ink}>inc</button>
        </div>
    );
};

export default Increment;
