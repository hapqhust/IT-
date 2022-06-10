import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props:any) => {
  return <ul className="nav-links">
    <li>
      <NavLink to=".">ホームページ</NavLink>
    </li>
    <li>
      <NavLink to="/gioi-thieu">導入</NavLink>
    </li>
    <li>
      <NavLink to="/thuc-don">メニュー</NavLink>
    </li>
    {/* <li>
      <NavLink to="/uu-dai">ƯU ĐÃI</NavLink>
    </li> */}
    <li>
      <NavLink to="/dat-ban">予約</NavLink>
    </li>
  </ul>
};

export default NavLinks;