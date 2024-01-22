import { AccordionItem } from "./AccordionItem"
import { list } from "./list"
import './style.css'

export const Accordion = () => {
    return (<div>
        <div className="accordion_container">
        <h3>Frequently asked questions</h3>
        </div>
        {list.map((item, index)=>
        <AccordionItem key={index} title={item.title} content={item.content}/>)}
    </div>)
}