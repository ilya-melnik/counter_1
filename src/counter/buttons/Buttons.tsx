import React from 'react';
import s from './Buttons.module.css'
import Increment from "./btn_ink/Increment";
import Reset from "./btn_rest/reset";

type Buttons = {
    IncrementHandler: () => void
    ResetHandler: () => void
    inc: number
}
const Buttons = (props: Buttons) => {

    return (
        <div className={s.btns}>
            <Increment inc={props.inc} callback={props.IncrementHandler}/>
            <Reset inc={props.inc} callback={props.ResetHandler}/>
        </div>
    );
};

export default Buttons;
