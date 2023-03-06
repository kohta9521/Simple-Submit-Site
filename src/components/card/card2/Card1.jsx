import React, { useState, useRef} from "react";

import "./Card1.css";

export default function Card1() {

    const [clicked, setClicked] = useState(1);

    const work = [
        { title: '保育士', value: 1 },
        { title: '幼稚園教諭', value: 1 },
        { title: 'その他', value: 0 },
        { title: '資格なし', value: 0 },
    ]

    const changeButton = (value) => {
        // if (clicked) {
        //     const blue = document.getElementById('submitButton2');
        //     const red = document.getElementById('card1TopButton2');
        //     const check = document.getElementById('card1TopButton2');
        //     red.style.backgroundColor = 'red';
        //     blue.style.backgroundColor = 'blue';
        // } else {
        //     console.log('completea');
        // }
        if (value === 1) {
            const blue = document.getElementById('submitButton2');
            const red = document.getElementById('card1TopButton2');
            const check = document.getElementById('card1TopButton2');
            red.style.backgroundColor = 'red';
            blue.style.backgroundColor = 'blue';
        } else {
            const comment = document.getEkementById('card1Comment2');
            comment.style.display = 'block';
        }
    }


    return (
        <>
            <div className="card1">
            <div className="card1Container">
                <div className="card1Top">
                    <button className="card1TopButton" id="card1TopButton2" type="button" onClick={() => changeButton(work[0].value)}>{work[0].title}</button>
                    <button className="card1TopButton" onClick="colorBlueChange1()">{work[1].title}</button>
                </div>
                <div className="card1Bottom">
                    <button className="card1TopButton" onClick="colorBlueChange0()">{work[2].title}</button>
                    <button className="card1TopButton" onClick="colorBlueChange0()">{work[3].title}</button>
                </div>
                <div className="card1Comment" id="card1Comment2">
                    <div className="card1CommentContainer">
                    <p className="card1CommentText">※現在、資格をお持ちでない方のご紹介は難しくなっております。</p>
                    <input className="card1Check" type="checkbox" onClick="check()"></input>
                    </div>
                </div>
            </div>
            <div className="card1Submit">
                <input id="submitButton2" type="button" className="card1Submitbutton" value="残り４問"></input>
            </div>
        </div>
        </>
    );
}