import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>TheGoodQoutes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/" activeClassName={classes.active}>All Qoutes</NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={classes.active}>Add a Qoute</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
