import React, { useState }  from "react";

import "./Card1.css";

export default function Card1() {
    // データ配列
    const work = [
        { title: '保育士', value: 1 },
        { title: '幼稚園教諭', value: 1 },
        { title: 'その他', value: 0 },
        { title: '資格なし', value: 0 },
    ]

    const [click, setClick] = useState(true);
    // 引数を配列の中身に設定して{value}の値によって挙動を変化させる
    const button = () => {
        // はじめに{value}が1のものを設定
        // １の時にbuttonの背景色を変更／残りbuttnの背景色も変更する
        setClick(!click);
        // console.log('happy');
        // 2の時は背景色を変更させるとともにチェックをする動作を監視し押されたところで残り４問のボタンを押させる
    }


    return (
        <>
            <div className="card1">
            <div className="card1Container">
                <div className="card1Top">
                    <button className="card1TopButton" onClick={button}>{work[0].title}</button>
                    <button className="card1TopButton">{work[1].title}</button>
                </div>
                <div class="card1Bottom">
                    <button className="card1TopButton">{work[2].title}</button>
                    <button className="card1TopButton">{work[3].title}</button>
                </div>
                <div className={click ? 'isOpen' : 'isClose'}  id="card1Comment">
                    <div className="card1CommentContainer">
                    <p className="card1CommentText">※現在、資格をお持ちでない方のご紹介は難しくなっております。</p>
                    <input className="card1Check" type="checkbox" onClick="check()"></input>
                    </div>
                </div>
            </div>
            <div className="card1Submit">
                <button  id="submitButton" type="button" className="card1Submitbutton">残り4問</button>
            </div>
        </div>
        </>
    );
}