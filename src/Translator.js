import React, { useState } from "react";
import "./input.css"
export default function Translator() {
    const [message, setMessage] = useState("")
    const [from, setFrom] = useState("en")
    const [to, setTo] = useState("ru")
    const [translate, setTranslate] = useState("")

    function editText(_data, _from, _to) {
        const body = {
            "sourceLanguageCode": _from,
            "targetLanguageCode": _to,
            "format": "PLAIN_TEXT",
            "texts": [
                _data
            ],
            "folderId": "b1g2ckr5s8u3bgid1m5a"
        }
        const promiseTranslate = fetch("https://d5dtecn49lp3lhisl28g.apigw.yandexcloud.net", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .catch(console.error);

        return promiseTranslate;
    }
    async function handleSendMessage() {
        const t = await editText(message, from, to)
        if (t) {
            const result = t["translations"][0]
            setTranslate(result.text)
        }
    }
    function handleMessageChange(event) {
        setMessage(event.target.value)
    }

    function handleFromChange(event) {
        setFrom(event.target.value)
    }
    function handleToChange(event) {
        setTo(event.target.value)
    }
    return (<div className='flex z-5 grow justify-center items-center border-black border-2 flex-col'>
        <select onChange={handleFromChange} className='max-h-6 w-20 mr-96  px-2 ml-1 mt-1 mb-1'>
            <option>en</option>
            <option>ru</option>
        </select>
        <textarea rows={10} onChange={handleMessageChange} className="w-1/3 bg-yellow-400 border-black border-2"></textarea>
        <select onChange={handleToChange} className='max-h-6 w-20 mr-96 px-2 ml-1 mt-20 mb-1'>
            <option>ru</option>
            <option>en</option>
        </select>
        <textarea rows={10} defaultValue={translate} className="w-1/3 bg-yellow-400 border-black border-2"></textarea>
        <button onClick={handleSendMessage} className='w-20 h-10 bg-emerald-500 border-2 border-black text-white rounded'>Перевести</button >
    </div >)
}