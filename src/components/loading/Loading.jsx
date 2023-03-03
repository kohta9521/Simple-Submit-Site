import React from 'react'
import { Bars } from  'react-loader-spinner'

import "./Loading.css";

export default function Loading() {
    window.onload = function() {
        const spinner = document.getElementById('loading');
        spinner.classList.add('loaded');
    }
    return (
        <Bars
        height="80"
        width="80"
        color="black"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
    )
}
