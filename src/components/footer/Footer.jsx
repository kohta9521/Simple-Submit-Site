import React from 'react'

import "./Footer.css";

export default function Footer() {
    return (
        <div className="footer" id='footer'>
            <div className="footer-top">
                <img className='copyrightImg' src="./assets/copyright.png" alt="" />
            </div>
            <div className="footer-bottom">
                <ul>
                    <li className='footerList'><a href=""><img className='footerImg' src="./assets/text-riyokiyaku.png" alt="利用規約画像" /></a></li>
                    <li className='footerList'><a href=""><img className='footerImg' src="./assets/text-privacypolicy.png" alt="プライバシーポリシー画像" /></a></li>
                    <li className='footerList'><a href=""><img className='footerImg' src="./assets/text-uneigaisya.png" alt="運営会社画像" /></a></li>
                </ul>
            </div>
        </div> 
    );
}
