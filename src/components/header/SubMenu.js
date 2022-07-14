import React from 'react';
import PropTypes from 'prop-types';

SubNav.propTypes = {
    
};

function SubNav(props) {
    return (
        <>
             <ul className="dropdown-submenu sub-menu collapse" id="collapse-page-menu">
                            <li className="submenu-li">
                              <a href="about-us.html" className="submenu-link">About
                                us</a>
                            </li>
                            <li className="submenu-li">
                              <a href="javascript:void(0)" className="g-l-link"><span>Account</span> <i className="fa fa-angle-right" /></a>
                              <a href="#account-menu" data-bs-toggle="collapse" className="sub-link"><span>Account</span> <i className="fa fa-angle-down" /></a>
                              <ul className="collapse blog-style-1" id="account-menu">
                                <li>
                                  <a href="order-history.html" className="sub-style"><span>Order</span></a>
                                  <a href="order-history.html" className="blog-sub-style"><span>Order</span></a>
                                  <a href="profile.html" className="sub-style"><span>Profile</span></a>
                                  <a href="profile.html" className="blog-sub-style"><span>Profile</span></a>
                                  <a href="pro-wishlist.html" className="sub-style"><span>Wishlist</span></a>
                                  <a href="pro-wishlist.html" className="blog-sub-style"><span>Wishlist</span></a>
                                </li>
                              </ul>
                            </li>
                            <li className="submenu-li">
                              <a href="billing-info.html" className="submenu-link">Billing
                                info</a>
                            </li>
                            <li className="submenu-li">
                              <a href="faq%27s.html" className="submenu-link">Faq's</a>
                            </li>
                            <li className="submenu-li">
                              <a href="contact.html" className="submenu-link">Contact
                                us</a>
                            </li>
                            <li className="submenu-li">
                              <a href="terms-conditions.html" className="submenu-link">Terms &amp; conditions</a>
                            </li>
                          </ul>
        </>
    );
}

export default SubNav;