import React from "react";

/**
 * Renders the question and answers page with all its corresponding elements.
 */
export default function ScrollSpy() {
    return (
        <div>
            <nav id="scrollspy">
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                        <a className="nav-link" href="#faq">FAQs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#forum">Forum</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}