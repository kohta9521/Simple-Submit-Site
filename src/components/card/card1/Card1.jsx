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

    // valueの合計値によって挙動を変化させる
    // const sumValue= work[0].value + work[1].value + work[2].value + work[3].value;
    // console.log(sumValue);
    const sumValue = 0;

    // useState宣言部分
    const [ click1, setClick1 ] = useState(true);
    const [ click2, setClick2 ] = useState(true);
    const [ click3, setClick3 ] = useState(true);
    const [ click4, setClick4 ] = useState(true);
    const [ red, setRed ] = useState('red');
    console.log(red);

    // 条件分岐部分
    // sumValueの値が１以上だった時にComment部分を表示させない
    if (sumValue < 1) {
        
    } else {

    }

    // 使用している関数
    // ボタンの色を変更させる関数
    const toggle1 = () => {
        setClick1(!click1);
        setRed(!red)
        alert('fuck')
    }

    // 非表示／表示の関数
    // const display = () => {

    // }

     // チェックボックスの管理の関数
    // const check = () => {
    //     const check = document.getElementById('card1Check');
    //     if (check.checked) {
    //         const comment = document.getElementById('card1Comment');
    //         comment.style.display = 'none';
    //     } else {
    //         const comment = document.getElementById('card1Comment');
    //         comment.style.display = 'block';
    //     }
    // }

    // 次のスライドを出現させる関数
    // const upSlide = () => {

    // }

    return (
        <>
            <div className="card1">
            <div className="card1Container">
                <div className="card1Top">
                    <button className={click1 ? 'white' : 'red'} onClick={toggle1}>{work[0].title}</button>
                    <button className={click1 ? 'white' : 'red'} onClick={toggle1}>{work[1].title}</button>
                </div>
                <div className="card1Bottom">
                    <button className={click1 ? 'white' : 'red'} onClick={toggle1}>{work[2].title}</button>
                    <button className={click1 ? 'white' : 'red'} onClick={toggle1}>{work[3].title}</button>
                </div>
                <div id="card1Comment">
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