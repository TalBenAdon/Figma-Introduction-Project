import React from 'react'
import Article from '../Articles/Article'
import Posts from "../../public/posts.json"
import './List.css'

export default function List() {
    return (
        <div className='grid-wrapper'>
            <h2>Popular Topics</h2>
            <div className='big-list-container'>
                {Posts.map(post => {
                    return <Article key={post.title} coverImage={post.coverImage} title={post.title} link={post.link} tags={post.tags} date={post.date} intro={post.intro} />
                })}

            </div>
        </div>
    )
}
