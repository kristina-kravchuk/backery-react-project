function ButtonsMenu({menuChoise}){

    return(<div className="buttons_menu">
        <button className="btn-menu" onClick={() => menuChoise("bread")}>Bread</button>
        <button className="btn-menu" onClick={() => menuChoise("pastry")}>Pastry</button>
        <button className="btn-menu" onClick={() => menuChoise("cake")}>Cakes</button>
        <button className="btn-menu" onClick={() => menuChoise("glutenFree")}>Gluten Free</button>
    </div>

    )

}
export default ButtonsMenu;