import React, { useState, useRef} from "react";

import "./Card2.css";

export default function Card2() {

    // データ配列
    const work = [
        { title: '正社員', value: 1 },
        { title: 'パート', value: 0 },
    ]

    //  0 or 1で挙動を変化させる
    const samvalue = 0;

    // useState宣言部分
    const [ click1, setClick1 ] = useState(true);
    const [ click2, setClick2 ] = useState(true);
    const [ red, setRed ] = useState('red') ;
    const [ open, setOpen ] = useState('close');

    // 関数記述部分
    const toggle1 = () => {
        setClick1(!click1);
        setRed(!red)
    }
    const toggle2 = () => {
        setClick2(!click2);
        setRed(!red);
        setOpen(!open);
    }
        // 次のスライドへの移動
        const next = () => {
            console.log('next slide open')
        }
    

    return (
        <>
            <div className="card2">
            <div className="card2Container">
                <div className="card1Top">
                    <button className={click1 ? 'white' : 'red'} onClick={toggle1}>{work[0].title}</button>
                    <button className={click2 ? 'white' : 'red'} onClick={toggle2}>{work[1].title}</button>
                </div>
                <div id="card2Comment2" className={open ? 'close' : 'open'} onClick={toggle2}>
                    <div className="card2CommentContainer">
                    <p className="card2CommentText">※パート求人は、即日で入社できる方にのみご案内しております</p>
                    <input className="card2Check" type="checkbox" onClick="check()"></input>
                    </div>
                </div>
            </div>
            <div id="card2Submit">
                <button  id="submitButton" type="button"  onClick={next}>残り4問</button>
            </div>
        </div>
        </>
    );
}