import React from 'react';

function ListMenu(props) {
    return (
        <>
              <ul className="dropdown-submenu mega-menu collapse" id="collapse-mega-menu">
                            <li className="megamenu-li parent">
                              <h2 className="sublink-title">Fresh food</h2>
                              <a href="#collapse-sub-mega-menu" data-bs-toggle="collapse" className="sublink-title sublink-title-lg">
                                <span>Fresh food</span>
                                <i className="fa fa-angle-down" />
                              </a>
                              <ul className="dropdown-supmenu collapse" id="collapse-sub-mega-menu">
                                <li className="supmenu-li"><a href="product.html">Fruit
                                    &amp; nut</a></li>
                                <li className="supmenu-li"><a href="product.html">Snack
                                    food</a></li>
                                <li className="supmenu-li"><a href="product.html">Organics nut gifts</a>
                                </li>
                                <li className="supmenu-li"><a href="product.html">Non-dairy</a></li>
                                <li className="supmenu-li"><a href="product.html">Mayonnaise</a></li>
                                <li className="supmenu-li"><a href="product.html">Milk
                                    almond</a></li>
                              </ul>
                            </li>
                            <li className="megamenu-li parent">
                              <h2 className="sublink-title">Mixedfruits</h2>
                              <a href="#collapse-fruits-menu" data-bs-toggle="collapse" className="sublink-title sublink-title-lg">
                                <span>Mixedfruits</span>
                                <i className="fa fa-angle-down" />
                              </a>
                              <ul className="dropdown-supmenu collapse" id="collapse-fruits-menu">
                                <li className="supmenu-li"><a href="product.html">Oranges</a></li>
                                <li className="supmenu-li"><a href="product.html">Coffee
                                    creamers</a></li>
                                <li className="supmenu-li"><a href="product.html">Ghee
                                    beverages</a></li>
                                <li className="supmenu-li"><a href="product.html">Ranch
                                    salad</a></li>
                                <li className="supmenu-li"><a href="product.html">Hemp
                                    milk</a></li>
                                <li className="supmenu-li"><a href="product.html">Nuts &amp;
                                    seeds</a></li>
                              </ul>
                            </li>
                            <li className="megamenu-li parent">
                              <h2 className="sublink-title">Bananas &amp; plantains</h2>
                              <a href="#collapse-banana-menu" data-bs-toggle="collapse" className="sublink-title sublink-title-lg">
                                <span>Bananas &amp; plantains</span>
                                <i className="fa fa-angle-down" />
                              </a>
                              <ul className="dropdown-supmenu collapse" id="collapse-banana-menu">
                                <li className="supmenu-li"><a href="product.html">Fresh
                                    gala</a></li>
                                <li className="supmenu-li"><a href="product.html">Fresh
                                    berries</a></li>
                                <li className="supmenu-li"><a href="product.html">Fruit
                                    &amp; nut</a></li>
                                <li className="supmenu-li"><a href="product.html">Fifts
                                    mixed fruits</a></li>
                                <li className="supmenu-li"><a href="product.html">Oranges</a></li>
                                <li className="supmenu-li"><a href="product.html">Oranges</a></li>
                              </ul>
                            </li>
                            <li className="megamenu-li parent">
                              <h2 className="sublink-title">Apples berries</h2>
                              <a href="#collapse-apple-menu" data-bs-toggle="collapse" className="sublink-title sublink-title-lg">
                                <span>Apples berries</span>
                                <i className="fa fa-angle-down" />
                              </a>
                              <ul className="dropdown-supmenu collapse" id="collapse-apple-menu">
                                <li className="supmenu-li"><a href="product.html">Pears
                                    produce</a></li>
                                <li className="supmenu-li"><a href="product.html">Bananas</a></li>
                                <li className="supmenu-li"><a href="product.html">Natural grassbeab</a>
                                </li>
                                <li className="supmenu-li"><a href="product.html">Fresh
                                    green orange</a></li>
                                <li className="supmenu-li"><a href="product.html">Fresh
                                    organic reachter</a></li>
                                <li className="supmenu-li"><a href="product.html">Balckberry
                                    100%organic</a></li>
                              </ul>
                            </li>
                          </ul>
        </>
    );
}

export default ListMenu;