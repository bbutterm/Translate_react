import React from "react";
import "./input.css"
export default function Quotes(props) {
    const data = props.data
    const number = props.number
    try {
        return (<div className='flex gap-y-40 flex-col min-h-screen items-center border-2 min-h-20%'>
            <div>
                <textarea rows={7} defaultValue={data[0][0 + number].q} className='text-center border-2 bg-yellow-400 place-items-center rounded text-black border-black mx-10'></textarea>
                <h2 className="w-full ml-20 text-center border-2 border-black w-1/2 mt-2 bg-yellow-400  text-black rounded">{data[0][0 + number].a}</h2>
            </div>
            <div>
                <textarea rows={7} defaultValue={data[0][1 + number].q} className='text-center border-2 bg-yellow-400 rounded text-black border-black mx-10'></textarea>
                <h2 className="ml-20 text-center  border-2 border-black w-1/2 mt-2 bg-yellow-400  text-black rounded">{data[0][1 + number].a}</h2>
            </div>
            <div>
                <textarea rows={7} defaultValue={data[0][2 + number].q} className='text-center border-2 bg-yellow-400 rounded text-black border-black mx-10'></textarea>
                <h2 className="ml-20 text-center w-1/2 mt-2 bg-yellow-400 border-2 border-black  text-black rounded ">{data[0][2 + number].a}</h2>
            </div>
        </div>)
    }
    catch (err) {
        console.log(err)
    }
}