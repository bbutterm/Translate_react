import { render } from "react-dom";
import "./input.css"
import Quotes from './Quotes.js';
import Translator from './Translator.js';
import React, { useEffect, useState } from 'react';

function App() {
    const [quotes, SetQuotes] = useState([]);
    const api_url = "https://zenquotes.io/api/quotes/";
    useEffect(() => {
        async function getapi(url) {
            const response = await fetch(url);
            const data = await response.json()
            SetQuotes(quotes => [...quotes, data])
        }
        getapi(api_url).catch(console.error)

    }, [])
    return (
        <div className='flex min-h-full min-w-full content-center justify-ceter align-center flex-wrap' >
            <Quotes number={0} data={quotes} />
            <Translator className='' />
            <Quotes number={6} data={quotes} className='' />
        </div >
    )
}

render(<App />, document.querySelector("#app"));