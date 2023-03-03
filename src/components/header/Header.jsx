import React from 'react'

import "./Header.css";

export default function Header() {
    return (
        <>
        <div className="header">
            <img src="/assets/brand.png" alt="" className="headerImg" />
        </div>

        <div id="hero" class="hero">
            <img class="heroImg" src="/assets/top-banner.jpg" alt="" />
        </div>
        </>
    )
}
