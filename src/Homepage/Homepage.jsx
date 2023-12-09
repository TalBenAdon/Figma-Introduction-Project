import ButtonMenu from "../ButtonMenu/ButtonMenu"
import Header from "../Header/Header"
import List from "../List/List"
import './Homepage.css'
import Posts from "../../public/posts.json"
import { useState } from "react"
const categories = []


Posts.forEach(post => {
    post.tags.forEach(tag => {
        if (!categories.includes(tag)) {
            categories.push(tag)
        }
    })
});
console.log(categories);
let selectedTag = ""

export default function Homepage() {
    const [postsList, setFiltered] = useState(Posts)

    const handleTags = (tag) => {
        if (tag) {
            setFiltered(Posts.filter(post => post.tags.includes(tag)))
            selectedTag = tag
        } else {
            setFiltered(Posts)
            selectedTag = ""
        }

    }
    return (
        <div>
            <Header />
            <div className="list-wrapper">
                <h2>Popular Topics</h2>
                <ButtonMenu selectedTag={selectedTag} categories={categories} handleTags={handleTags} />
                <List postsList={postsList} />
            </div>
        </div>
    )
}

