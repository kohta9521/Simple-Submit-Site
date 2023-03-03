import React, { useState, useEffect} from "react";

import "./Card1.css";

export default function Card1() {

    // js
    const cardButton = document.getElementById('cardTopButton');

    useEffect(() => {
    function colorBlueChange1() {
        addEventListener('click', () => {
            cardButton.style.backgroundColor = '#ED145D';
            cardButton.style.color = '#fff';
            document.getElementById('submitButton').style.backgroundColor = "#57d1d8";
            document.getElementById('submitButton').style.fontColor = "#fff";

            if (cardButton.style.backgroundColor === '#ED145D') {
                comment.style.display = 'none';
            } else {
                Comment.style.display = 'block';
            }
        })
    }        
    })


    return (
        <>
            <div class="card1">
            <div class="card1Container">
                <div class="card1Top">
                    <button class="card1TopButton" id="card1TopButton" onclick="colorBlueChange1()">保育士</button>
                    <button class="card1TopButton" onclick="colorBlueChange1()">幼稚園教諭</button>
                </div>
                <div class="card1Bottom">
                    <button class="card1TopButton" onclick="colorBlueChange0()">その他</button>
                    <button class="card1TopButton" onclick="colorBlueChange0()">資格なし</button>
                </div>
                <div class="card1Comment" id="card1Comment">
                    <div class="card1CommentContainer">
                    <p class="card1CommentText">※現在、資格をお持ちでない方のご紹介は難しくなっております。</p>
                    <input class="card1Check" type="checkbox" onclick="check()"></input>
                    </div>
                </div>
            </div>
            <div class="card1Submit">
                <input id="submitButton" type="button" class="card1Submitbutton" value="残り４問"></input>
            </div>
        </div>
        </>
    );
}