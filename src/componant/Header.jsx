import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Header() {

    const categories = useSelector(state=>state.newsCategory);
    console.log(categories);
 
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">NewsApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className='navbar-nav me-auto mb-2 lg-0'> 
                        {
                            categories.length > 0 && categories.map((category,index) => (
                            <li className="nav-item" key={index}>
                                <Link className="nav-link" aria-current="page" to={`/category/${category.toLowerCase()}`} key={index}>{category}</Link>
                            </li>                           
                            ))
                        }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
