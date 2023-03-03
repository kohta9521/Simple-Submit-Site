import React, { useState, useEffect} from "react";

import "./Card1.css";

export default function Card1() {

    // // js
    // const cardButton = document.getElementById('cardTopButton');

    // useEffect(() => {
    // function colorBlueChange1() {
    //     addEventListener('click', () => {
    //         cardButton.style.backgroundColor = '#ED145D';
    //         cardButton.style.color = '#fff';
    //         document.getElementById('submitButton').style.backgroundColor = "#57d1d8";
    //         document.getElementById('submitButton').style.fontColor = "#fff";

    //         if (cardButton.style.backgroundColor === '#ED145D') {
    //             comment.style.display = 'none';
    //         } else {
    //             Comment.style.display = 'block';
    //         }
    //     })
    // }        
    // })


    return (
        <>
            <div className="card1">
            <div className="card1Container">
                <div className="card1Top">
                    <button className="card1TopButton" id="card1TopButton" onClick="colorBlueChange1()">保育士</button>
                    <button className="card1TopButton" onClick="colorBlueChange1()">幼稚園教諭</button>
                </div>
                <div class="card1Bottom">
                    <button className="card1TopButton" onClick="colorBlueChange0()">その他</button>
                    <button className="card1TopButton" onClick="colorBlueChange0()">資格なし</button>
                </div>
                <div className="card1Comment" id="card1Comment">
                    <div className="card1CommentContainer">
                    <p className="card1CommentText">※現在、資格をお持ちでない方のご紹介は難しくなっております。</p>
                    <input className="card1Check" type="checkbox" onClick="check()"></input>
                    </div>
                </div>
            </div>
            <div className="card1Submit">
                <input id="submitButton" type="button" className="card1Submitbutton" value="残り４問"></input>
            </div>
        </div>
        </>
    );
}