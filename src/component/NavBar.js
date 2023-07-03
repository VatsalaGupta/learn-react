import React from 'react'
import './NavBar.css';
const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-lighT">
                <a className="navbar-brand">Home</a>
                <a className="navbar-brand">About</a>
                <a className="navbar-brand">Contact</a>
                <a className="navbar-brand">Service</a>
                <a className="navbar-brand">Product</a>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        <button className="btn btn-outline-primary my-2 my-sm-0"style={{margin:"9px"}} >SignUp</button>
                        <button className="btn btn-outline-danger my-2 my-sm-0" style={{margin:"9px"}}>Login</button>
                </form>
            </nav>
        </div>
    )
}

export default NavBar
