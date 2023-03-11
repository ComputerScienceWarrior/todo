import React from "react";

const Item = (props) => {
    return(
        <div className="border-2 border-black p-10 m-5 rounded bg-red-400 font-bold">
            <h1 className="text-2xl italic text-white underline underline-offset-4">{props.name}</h1>
            <div className="flex flex-row justify-between">
                <div className="float-left">{props.description}</div>
                <div className="float-right w-10 cursor-pointer" onClick={() => console.log(`Closed task '${props.name}'.`)}>X</div>
            </div>
        </div>
    )
}

export default Item;
