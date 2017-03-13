/**
 * Created by Hasani on 3/7/2017.
 */
import React from "react";
/**
 * menggunakan keyword export
 * agar component pada class header
 * dapat digunakan pada class App pada file index.js
 */
export const Header = (props) => {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="#">{props.homeLink}</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
}
