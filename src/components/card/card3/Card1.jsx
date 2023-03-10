import React, { useState } from "react";

import "./Card1.css";

export default function Card1() {


    const work = [
        { title: '保育士', value: 1 },
        { title: '幼稚園教諭', value: 1 },
        { title: 'その他', value: 0 },
        { title: '資格なし', value: 0 },
    ]
    const [open, setOpen] = useState(true)
    const toggle = () => setOpen(!open)

    return (
        <>
            <div className="card1">
                ここから記述
            <div className="card1Container">
                <div className="card1Top">
                    <button className="card1TopButton" id="card1TopButton2" type="button" onClick={{toggle}}>{work[0].title}</button>
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