import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props:any) => {
  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>TRANG CHỦ</NavLink>
    </li>
    <li>
      <NavLink to="/gioi-thieu">GIỚI THIỆU</NavLink>
    </li>
    <li>
      <NavLink to="/thuc-don">THỰC ĐƠN</NavLink>
    </li>
    <li>
      <NavLink to="/uu-dai">ƯU ĐÃI</NavLink>
    </li>
    <li>
      <NavLink to="/dat-ban">ĐẶT BÀN</NavLink>
    </li>
  </ul>
};

export default NavLinks;