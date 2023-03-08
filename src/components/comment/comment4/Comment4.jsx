import React from 'react'

import "./Comment4.css";

export default function Comment4() {
    return (
    <>
    <div className="comment">
        <div className="commentContainer">
            <img className='commentCharImg' src="./assets/icon-char.png" alt="らこたん画像" />
            <div className="commentBox">
                ありがとうございます!<br />
                <span class='text-blue'>お名前</span>と<span class='text-blue'>お生まれ年</span>を<br />
                お教えいただけますでしょうか?
            </div>
        </div>
    </div>
    </>
    );
}   