'use client'

import { useEffect } from "react";
import Cookies from 'js-cookie';

const LogginButton = (props) => {

    return (
        <button
            onClick={props.action}
            className={props.style}
        >
            <p>{props.text}</p>
        </button>
    )
}

export default LogginButton