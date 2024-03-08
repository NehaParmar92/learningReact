import React, { Component } from 'react'
import './component.css';
import { Link } from "react-router-dom";

export class NavBar extends Component {


    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to="/general" active>News</Link></li>
                        <li><Link to="/general">General</Link></li>
                        <li><Link to="/sports">Sports</Link></li>
                        <li><Link to="/science">Science</Link></li>
                        <li><Link to="/business">Business</Link></li>
                        <li><Link to="/entertainment">Entertainment</Link></li>
                        <li><Link to="/health">Health</Link></li>
                        <li><Link to="/technology">Technology</Link></li>

                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar
