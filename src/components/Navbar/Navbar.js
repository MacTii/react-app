import React, { Component } from 'react'
import { Button } from '../Button'
import { MenuItems } from './MenuItems'
import { Link } from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render () {
        return(
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>
                    <Link to='/'>
                        Shop <i class="fas fa-sack-dollar" />
                    </Link>
                </h1>
                <div className='menu-icon' onClick={this.handleClick}> 
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index)=> {
                        return(
                            <li key={index}>
                                <Link to={item.url} className={item.cName}>
                                    {item.title}
                                </Link> 
                            </li>
                        )
                    })}
                </ul>
                <Link to='signup'>
                    <Button>Sign Up</Button>
                </Link>
            </nav>
        )
    }
}

export default Navbar