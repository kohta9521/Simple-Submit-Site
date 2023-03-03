import React from 'react'

import "./Comment1.css";

export default function Comment1() {
    return (
    <>
    <div className="comment">
        <div className="commentContainer">
            <img className='commentCharImg' src="./assets/icon-char.png" alt="らこたん画像" />
            <div className="commentBox">
                はじめまして！<span class="text-pink">らこたん</span>です。<br />
                あなたの転職のお手伝いをさせていただきます。<br />
                はじめに、<span class="text-blue">お持ちの資格</span>をご選択ください。
            </div>
        </div>
    </div>
    </>
    );
}   