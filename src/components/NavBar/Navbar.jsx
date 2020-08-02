import React from 'react'
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to='/profile' activeClassName={classes.activeLink} alt='profile'>Profile</NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}> 
        <NavLink to='/dialogs' activeClassName={classes.activeLink} alt='dialogs'>Messages</NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to='/users' activeClassName={classes.activeLink} alt='users'>Users</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/news' activeClassName={classes.activeLink} alt='news'>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/music' activeClassName={classes.activeLink} alt='music'>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/settings' activeClassName={classes.activeLink} alt='settings'>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
