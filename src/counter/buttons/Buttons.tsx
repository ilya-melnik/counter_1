import React from 'react';
import s from './Buttons.module.css'
import Button from "./button/btn";


type Buttons = {
    IncrementHandler: () => void
    ResetHandler: () => void
    inc: number
}
const Buttons = (props: Buttons) => {
    const incBtnStyle = props.inc === 5 ? s.disabled : s.ink
    const resBtnStyle = props.inc === 0 ? s.disabled : s.ink

    return (
        <div className={s.btns}>
            <Button name="inc" disabled={props.inc === 5} callback={props.IncrementHandler} className={incBtnStyle}/>
            <Button name="reset" disabled={props.inc === 0} callback={props.ResetHandler} className={resBtnStyle}/>
        </div>
    );
};

export default Buttons;
