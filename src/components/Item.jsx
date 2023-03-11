import React from "react";

const Item = () => {
    // const style={
    //     fontWeight: "bold",
    //     color: "black",
    //     border: "solid red 1px",
    //     borderRadius: "5px",
    //     width: "75%",
    //     margin: "auto",
    //     padding: "15px",
    //     display: "flex",
    //     flexDirection: "row"
    // }
    return(
        <div className="border-2 border-black p-10 m-5 rounded bg-red-400 font-bold">
            <h1 className="text-2xl italic text-white underline underline-offset-4">List Item Name</h1>
            <div className="flex flex-row justify-between"> {/* props.itemName  */}
                <div className="float-left">Item Component</div>
                <div className="float-right w-10 cursor-pointer" onClick={() => console.log("Closed")}>X</div>
            </div>
        </div>
    )
}

export default Item;
