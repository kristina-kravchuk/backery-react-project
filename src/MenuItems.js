function MenuItems ({menu}){
    return(
        <div className="menuItems">
            {menu.map((item => {
                const {id, title, price, image} = item;
                return(
                    <div className="menuItems_container" key={id}>
                        <img src={image} width="200px" height="150px"  alt="menu"/>
                        <h3>{title}</h3>
                        <p>{price}</p>
                    </div>
                )
            }))}
        </div>
    )
}
export default MenuItems;