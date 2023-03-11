import React from "react";
import Item from "./Item";
import { data } from "../data";

const ItemList = () => {

    return(
        <div className="border-2 border-black p-10 m-5 rounded bg-blue-600 font-bold">
            {
                data.map((item, i) => {
                    return <Item key={i} name={item.name} description={item.description} />
                })
            }
        </div>
    )
}

export default ItemList;
