import React from 'react';

function HeaderCategory(props) {
    return (
        <>
             <ul className="dropdown-submenu banner-menu collapse" id="collapse-banner-menu">
                            <li className="menu-banner">
                              <a href="grid-list.html" className="menu-banner-img"><img src="image/menu-banner01.jpg" alt="menu-image" className="img-fluid" /></a>
                              <a href="grid-list.html" className="menu-banner-title"><span>Bestseller</span></a>
                            </li>
                            <li className="menu-banner">
                              <a href="grid-list.html" className="menu-banner-img"><img src="image/menu-banner02.jpg" alt="menu-image" className="img-fluid" /></a>
                              <a href="grid-list.html" className="menu-banner-title"><span>Special
                                  product</span></a>
                            </li>
                            <li className="menu-banner">
                              <a href="grid-list.html" className="menu-banner-img"><img src="image/menu-banner03.jpg" alt="mneu image" className="img-fluid" /></a>
                              <a href="grid-list.html" className="menu-banner-title"><span>Featured
                                  product</span></a>
                            </li>
                          </ul>
        </>
    );
}

export default HeaderCategory;