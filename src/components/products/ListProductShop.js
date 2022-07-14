import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Product from '../products/Product'
import productApi from '../../apis/ProductsApi'
import { useNavigate, useLocation, createSearchParams } from "react-router-dom";
import queryString from "query-string";

ListProductShop.propTypes = {}

function ListProductShop(props) {
  const [productList, setProductList] = useState([])
  const location = useLocation();
  const navigate = useNavigate();
  const a = queryString.parse(location.search);

  useEffect(() => {
    (async () => {
      try {
        const response = await productApi.getAll()
        console.log(response)
        setProductList(response)
      } catch (err) {
        console.error(err)
      }
    })()
  }, [])
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await productApi.getProductByFilter()
  //       // console.log(response)
  //       setProductList(response)
  //     } catch (err) {
  //       console.error(err)
  //     }
  //   })()
  // }, [])
  return (
    <>
      <div className="col-lg-9 col-md-8 col-12">
        <div
          className="grid-list-banner"
          style={{ backgroundImage: 'url(image/slider17.jpg)' }}
        >
          <div className="grid-banner-content">
            <h4>Bestseller</h4>
            <p>
              Praesent dapibus, neque id cursus Ucibus, tortor neque egestas
              augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam
              dui mi, tincidunt quis, facilisis luc...
            </p>
          </div>
        </div>
        <div className="grid-list-area">
          <div className="grid-list-select">
            <ul className="grid-list">
              <li className="colloction-icn">
                <a href="grid-list-2.html">
                  <i className="ti-layout-list-thumb" />
                </a>
              </li>
              <li className="colloction-icn">
                <a href="grid-list-3.html">
                  <i className="ti-layout-grid2" />
                </a>
              </li>
              <li className="colloction-icn three-grid">
                <a href="grid-list.html" className="active">
                  <i className="ti-layout-grid3" />
                </a>
              </li>
              <li className="colloction-icn four-grid">
                <a href="grid-list-4.html">
                  <i className="ti-layout-grid4" />
                </a>
              </li>
            </ul>
            <ul className="grid-list-selector">
              <li>
                <label>Sort by</label>
                <select>
                  <option>Featured</option>
                  <option>Best selling</option>
                  <option>Alphabetically,A-Z</option>
                  <option>Alphabetically,Z-A</option>
                  <option>Price, low to high</option>
                  <option>Price, high to low</option>
                  <option>Date new to old</option>
                  <option>Date old to new</option>
                </select>
              </li>
            </ul>
          </div>
          <div className="grid-pro">
            <ul className="grid-product">
              {productList.map((product) => (
                <Product
                  key={product.id}
                  class="grid-items"
                  firstImg={product.img}
                  secondImg={product.img2}
                  weight={product.weight}
                  name={product.name}
                  new={true}
                  newPrice={product.price}
                  oldPrice={''}
                  rate={product.rating}
                />))}
            </ul>
          </div>
        </div>
        <div className="list-all-page">
          <span className="page-title">Showing 1 - 17 of 17 result</span>
          <div className="page-number">
            <a href="grid-list.html" className="active">
              1
            </a>
            <a href="grid-list-2.html">2</a>
            <a href="grid-list-3.html">3</a>
            <a href="grid-list-4.html">4</a>
            <a href="javascript:void(0)">
              <i className="fa fa-angle-double-right" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListProductShop
