import React from 'react';
import s from './btn.module.css'


type PropsType = {
    callback: () => void
    disabled: boolean
    name: string
    className: string
}
const Button = (props: PropsType) => {
    return (
        <div>
            <button onClick={props.callback} className={props.className} disabled={props.disabled}>{props.name}</button>
        </div>
    );
};

export default Button;
