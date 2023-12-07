
import React from 'react'
import './Article.css'

export default function Article(props) {
    const { coverImage, date, title, intro } = props
    return (

        <div className='article-card-container'>

            <a href="" className='article-card-img'><img src={coverImage} alt="coverimg" />
            </a>
            <div className='article-card-date'>
                {date}
            </div>
            <h3>{title}</h3>
            <p>{intro}</p>
        </div>
    )
}
