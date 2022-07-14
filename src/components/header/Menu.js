import React from 'react';
import HeaderCategory from './HeaderCategory'
import SubMenu from './SubMenu'
import ListMenu from './ListMenu'
function Menu(props) {
    return (
        <>
            <div className="main-menu-area">
              <div className="main-navigation navbar-expand-xl">
                <div className="box-header menu-close">
                  <button className="close-box" type="button"><i className="ion-close-round" /></button>
                </div>
                {/* menu start */}
                <div className="navbar-collapse" id="navbarContent">
                  <div className="megamenu-content">
                    <div className="mainwrap">
                      <ul className="main-menu">
                        <li className="menu-link parent">
                          <a href="index.html" className="link-title">
                            <span className="sp-link-title">Home</span>
                          </a>
                        </li>
                        <li className="menu-link parent">
                          <a href="javascript:void(0)" className="link-title">
                            <span className="sp-link-title">Shop</span>
                            <i className="fa fa-angle-down" />
                          </a>
                          <a href="#collapse-mega-menu" data-bs-toggle="collapse" className="link-title link-title-lg">
                            <span className="sp-link-title">Shop</span>
                            <i className="fa fa-angle-down" />
                          </a>
                       <ListMenu />
                        </li>
                        <li className="menu-link parent">
                          <a href="grid-list.html" className="link-title">
                            <span className="sp-link-title">Collection</span>
                            <i className="fa fa-angle-down" />
                          </a>
                          <a href="#collapse-banner-menu" data-bs-toggle="collapse" className="link-title link-title-lg">
                            <span className="sp-link-title">Collection</span>
                            <i className="fa fa-angle-down" />
                          </a>
                         <HeaderCategory />
                        </li>
                        <li className="menu-link parent">
                          <a href="javascript:void(0)" className="link-title">
                            <span className="sp-link-title">Pages</span>
                            <i className="fa fa-angle-down" />
                          </a>
                          <a href="#collapse-page-menu" data-bs-toggle="collapse" className="link-title link-title-lg">
                            <span className="sp-link-title">Pages</span>
                            <i className="fa fa-angle-down" />
                          </a>
                         <SubMenu />
                        </li>
                        <li className="menu-link parent">
                          <a href="blog.html" className="link-title">
                            <span className="sp-link-title">Blogs</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* menu end */}
                <div className="img-hotline">
                  <div className="image-line">
                    <a href="javascript:void(0)"><img src="image/icon_contact.png" className="img-fluid" alt="image-icon" /></a>
                  </div>
                  <div className="image-content">
                    <span className="hot-l">Hotline:</span>
                    <span>0969 609 003</span>
                  </div>
                </div>
              </div>
            </div>
        </>
    );
}

export default Menu;