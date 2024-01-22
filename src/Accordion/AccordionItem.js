import { useState } from "react"

export const AccordionItem =({title, content}) =>{
    const [open, setOpen]= useState(false);
    const handleIsOpen = () => {
        setOpen(!open)
    }

return(<div>
    <div className={open ? "active" : "default"} onClick={handleIsOpen}>
        {title}
    </div>
    {
        open && <div className="content">
            {content}
        </div>
    }
</div>)
}