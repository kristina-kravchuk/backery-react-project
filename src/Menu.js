import { useState } from "react"
import { data } from "./data"
import MenuItems from "./MenuItems";
import ButtonsMenu from "./ButtonsMenu";


export const Menu = () =>{
    const [menu, setMenu] =useState(data);

    const menuChoise = (searchName)=>{
        const newPurchase= data.filter(element => element.searchName === searchName)
        setMenu(newPurchase)
    }

    return(<div>
        <ButtonsMenu menuChoise={menuChoise}/>
        <MenuItems menu={menu}/>
        
        
    </div>
    )


}