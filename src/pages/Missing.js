import { Link } from "react-router-dom"

const Missing = () => {
    return (
        <article style={{ padding: "100px" }}>
            <h1>Oops!</h1>
            <p>Page Not Found</p>
            <div className="flexGrow">
                <Link to="/" >Visit Our <span className="hover-underline fw-bold">Homepage</span></Link>
            </div>
        </article>
    )
}

export default Missing
