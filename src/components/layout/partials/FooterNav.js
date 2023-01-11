import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
    const classes = classNames("footer-nav", className);

    return (
        <nav {...props} className={classes}>
            <ul className="list-reset">
                <li>
                    <Link to="#0">Контакты</Link>
                </li>
                <li>
                    <Link to="#0">О нас</Link>
                </li>
                <li>
                    <Link to="#0">FAQ</Link>
                </li>
                <li>
                    <Link to="#0">Поддержка</Link>
                </li>
            </ul>
        </nav>
    );
};

export default FooterNav;
