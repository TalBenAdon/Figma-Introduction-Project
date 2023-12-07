import React from 'react'
import Article from '../Articles/Article'
import Posts from "../../public/posts.json"

export default function List() {
    return (
        <div>
            <div>Popular Topics</div>
            <div>
                {Posts.map(post => {
                    return <Article key={post.title} coverImage={post.coverImage} title={post.title} link={post.link} tags={post.tags} date={post.date} intro={post.intro} />
                })}

            </div>
        </div>
    )
}
