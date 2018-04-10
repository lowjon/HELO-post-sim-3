import React, { Component } from 'react'
import axios from 'axios'
import './Styles/navbar.css'
import { Link } from 'react-router-dom'

import Home from '../assets/home.png'
import Search from '../assets/search.png'

export default class Navbar extends Component {
    constructor(props){
        super(props)

        this.logOut = this.logOut.bind(this)
    }

    logOut() {
        axios.get('api/logout').then( res => {
            console.log('user logged out')
        }, window.location.href = '/')
    }

    render(){
        return <div className="navbar_parent">
            <div className="navbar_left_container">
                <div className=''>Helo</div>
                <Link to='/dashboard'><img src={Home} alt="Home Navbar Icon"/></Link>
                <Link to='/search'><img src={Search} alt="Search Navbar Icon"/></Link>
            </div>
            <div className="navbar_center">{this.props.param}</div>
            <div className="navbar_right_container">
              <div className="logout_button" onClick={() => this.logOut() }>
                Logout
              </div>
            </div>
          </div>;
    }
}