import React, {useState} from 'react';
import s from './Counter.module.css';
import Screen from "./screen/Screen";
import Buttons from "./buttons/Buttons";

const Counter = () => {

    let [inc, setInc] = useState<number>(0)

    const IncrementHandler = () => {

        if (inc < 5) {
            setInc(inc => inc + 1)
        }

    }

    const ResetHandler = () => {
        if (inc > 0) {
            setInc(inc => inc = 0)
        }
    }
    return (
        <div className={s.box}>
            <Screen inc={inc}/>
            <Buttons inc={inc} IncrementHandler={IncrementHandler} ResetHandler={ResetHandler}/>
        </div>
    );
};
export default Counter;
