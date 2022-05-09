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
            <img src="https://lauwang.vn/wp-content/uploads/2020/07/gg.png" alt="logo" className='logo'/>
            <p>Lẩu Wang</p>
          </div>
          <NavLinks />
        </nav>
      </SideDrawer>


      <MainHeader>
        <h1 className="main-navigation__title">
          <Link to="/">
            <img src="https://lauwang.vn/wp-content/uploads/2020/07/gg.png" alt="logo" className='logo'/>
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
