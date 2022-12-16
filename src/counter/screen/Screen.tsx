import React from 'react';
import s from './Screen.module.css'
type IncType = {
    inc: number
}

const Screen = (props: IncType) => {

    return (
        <div className={s.screen}>
<div className={s.number}>{props.inc}</div>
        </div>
    );
};

export default Screen;
