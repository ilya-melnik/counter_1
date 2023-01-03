import React from 'react';
import s from './reset.module.css'

type ResetType = {
    callback: ()=>void
    inc:number
}
const Reset = (props:ResetType) => {
    return (
        <div>
            <button  disabled={props.inc === 0} onClick={props.callback} className={s.ink}>reset</button>
        </div>
    );
};

export default Reset;
