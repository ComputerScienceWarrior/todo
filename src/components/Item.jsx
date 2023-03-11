import React, { useState } from "react";

const Item = (props) => {
    const [ markedDone, setMarkedDone] = useState(false)

    const handleDone = () => {
        setMarkedDone(true)
    }

    const handleDelete = () => {
        console.log(`Closed task '${props.name}'.`)
    }

    return(
        <div className={markedDone ? "border-2 border-black p-10 m-5 rounded bg-blue-400 font-bold opacity-10 line-through" : "border-2 border-black p-10 m-5 rounded bg-blue-400 font-bold"}>
            <h1 className="text-2xl italic text-white underline underline-offset-4">{props.name}</h1>
            <div className="flex flex-row justify-between">
                <div className="float-left">{props.description}</div>
                <div className="float-right w-10 cursor-pointer" onClick={handleDelete}>X</div>
            </div>
            {
                markedDone ? 
                <button className="border-2 border-black p-2 rounded" disabled onClick={handleDone}>Done</button>:
                <button className="border-2 border-black p-2 rounded" onClick={handleDone}>Done</button>
            }
        </div>
    )
}

export default Item;
