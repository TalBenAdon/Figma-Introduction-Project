import Header from "../Header/Header"
import List from "../List/List"
import './Homepage.css'

export default function Homepage() {
    return (
        <div>
            <Header />
            <div className="list-wrapper">
                <h2>Popular Topics</h2>
                <List />
            </div>
        </div>
    )
}

