import React from 'react'

const Navbar = ({ account }) => {
    return (
        <nav className="navbar navbar-dark bg-dark shadow mb-10">
      <p className="navbar-brand my-auto">Decentralized Voting Application </p>
      <ul className="navbar-nav">
         <li className="nav-item text-white"> {account} </li>
      </ul>
    </nav>
    )
}

export default Navbar
