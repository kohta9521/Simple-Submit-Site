import React from 'react'

import "./Comment3.css";

export default function Comment3() {
    return (
    <>
    <div className="comment">
        <div className="commentContainer">
            <img className='commentCharImg' src="./assets/icon-char.png" alt="らこたん画像" />
            <div className="commentBox">
                ありがとうございます!<br />
                続いて、<span class='text-blue'>郵便番号</span>の入力をお願いします。<br />
                番号が不明な場合には住所をご選択ください。
            </div>
        </div>
    </div>
    </>
    );
}   