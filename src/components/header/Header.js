import React from 'react'
import Menu from './Menu'
import Icon from './Icon'
import MiniCart from '../carts/MiniCart'
function Header(props) {
  return (
    <>
      <header className="header-area">
        <div className="header-main-area">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="header-main">
                  {/* logo start */}
                  <div className="header-element logo">
                    <a href="index.html">
                      <img
                        src="image/logo1.png"
                        alt="logo-image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  {/* logo end */}
                  {/* search start */}
                  <div className="header-element search-wrap">
                    <input
                      type="text"
                      name="search"
                      placeholder="Search product."
                    />
                    <a href="search.html" className="search-btn">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                  {/* search end */}
                  {/* header-icon start */}
                  <div className="header-element right-block-box">
                    <ul className="shop-element">
                      <li className="side-wrap nav-toggler">
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-toggle="collapse"
                          data-target="#navbarContent"
                        >
                          <span className="line" />
                        </button>
                      </li>
                      <li className="side-wrap user-wrap">
                        <div className="acc-desk">
                          <div className="user-icon">
                            <a href="account.html" className="user-icon-desk">
                              <span>
                                <i className="icon-user" />
                              </span>
                            </a>
                          </div>
                          <div className="user-info">
                            <span className="acc-title">Account</span>
                            <div className="account-login">
                              <a href="register.html">Register</a>
                              <a href="login.html">Log in</a>
                              <button type="button" id="khanh" tu>

                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="acc-mob">
                          <a href="account.html" className="user-icon">
                            <span>
                              <i className="icon-user" />
                            </span>
                          </a>
                        </div>
                      </li>
                      {/* <Icon typeIcon="icon-heart"/> */}
                      <Icon typeIcon="icon-handbag" />
                    </ul>
                  </div>
                  {/* header-icon end */}
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom-area">
            <div className="container">
              <div className="row">
                <div className="col">
                  <Menu />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*mini Cart start*/}
        <MiniCart />
      </header>
    </>
  )
}

export default Header
