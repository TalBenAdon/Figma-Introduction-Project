import React from 'react'
import "./ButtonMenu.css"


export default function ButtonMenu(props) {
    return (

        <div className='categories-container'>
            <button className={`category-button ${!props.selectedTag ? 'active' : ""}`} onClick={() => props.handleTags("")}>All</button>
            {props.categories.map(category => <button className={`category-button ${props.selectedTag === category ? 'active' : ""}`} onClick={() => props.handleTags(category)} key={category}>{category}</button>)}
        </div>
    )
}
