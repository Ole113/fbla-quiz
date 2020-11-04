import React from "react";

/**
 * Renders the question and answers page with all its corresponding elements.
 */
export default function ScrollSpy(props) {
    return (
        <div>
            <nav id="scrollspy">
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                        <a className="nav-link" href={props.href[0]}>{props.titles[0]}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={props.href[1]}>{props.titles[1]}</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}