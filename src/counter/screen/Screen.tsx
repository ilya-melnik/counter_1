import React from 'react';
import s from './Screen.module.css'
type IncType = {
    inc: number
}

const Screen = (props: IncType) => {

    return (
        <div className={s.screen}>
<div className={props.inc < 5? s.number:s.numberLimit}>{props.inc}</div>
        </div>
    );
};

export default Screen;
