import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MenuOutlined,
} from '@ant-design/icons';

import MainHeader from '../MainHeader';
import NavLinks from '../NavLinks';
import SideDrawer from '../SideDrawer';
import Backdrop from '../../UIElements/Backdrop';
import './MainNavigation.css';
import logo from '../../../assets/image/logo.png'

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <div className='logo-container'>
            <img src={logo} alt="logo" className='logo'/>
            <h3>HaMi Sushi</h3>
            <p>Enjoy our awesome sushi</p>
          </div>
          <NavLinks />
        </nav>
      </SideDrawer>


      <MainHeader>
        <h1 className="main-navigation__title">
          <Link to="/">
            <img src={logo} alt="logo" className='logo'/>
          </Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
        <MenuOutlined className="main-navigation__menu-btn" onClick={openDrawerHandler}/>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
