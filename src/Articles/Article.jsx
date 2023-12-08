
import React from 'react'
import './Article.css'


export default function Article(props) {
    const { coverImage, date, title, intro, tags } = props
    return (

        <div className='article-card-container'>

            <a href="" className='article-card-img'>
                <img src={coverImage} alt="coverimg" />
                <div className='card-tags'>
                    {tags.map(tag => <div className='tag'>{tag}</div>)}

                </div>
            </a>
            <div className='article-card-date'>
                {date}
            </div>
            <h3>{title}</h3>

            <p>{intro}</p>

        </div>
    )
}
