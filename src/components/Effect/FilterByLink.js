import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate, useLocation, createSearchParams } from "react-router-dom";
import queryString from "query-string";
FilterBy.propTypes = {}


function FilterBy(props) {

  const location = useLocation();
  const navigate = useNavigate();
  const a = queryString.parse(location.search);
  const x = a.categoryId;
  // document.querySelector('[data-id="value"]');
  // console.log(document.querySelector(`[data-id=${x}]`));
  useEffect(() => {
    (() => {

      console.log("khanh2", document.getElementById('eeadf6ec-dd7f-482c-b434-ad8c8a1d6057'));

    })()
  })

  if (typeof x === 'string') {

    console.log(document.querySelector(`[data-id=${x}]`));
    // document.querySelector(`[data-id=${x}]`).checked = true
  }
  function handleChange(e) {
    var data = [];
    if (Object.keys(a).length !== 0) {
      if (typeof x === 'string') {
        data = [x];
        console.log(document.querySelector(`[data-id=${x}]`));
        document.querySelector(`[data-id=${x}]`).checked = true
      } else {
        data = [...x];
      }
    }
    if (data.some((element) => element == e.target.getAttribute("data-id"))) {
      data = data.filter((element) => element != e.target.getAttribute("data-id"));
    } else {
      data.push(e.target.getAttribute("data-id"));
    }
    let stringquery = { categoryId: data };
    let datequery = queryString.stringify(stringquery);
    navigate({
      search: createSearchParams(datequery).toString(),
    });
  }
  return (
    <>
      <div className="categories-page-filter">
        <h4 className="filter-title">Categories</h4>
        <a href="#category-filter" data-bs-toggle="collapse" className="filter-link"><span>Categories
        </span><i className="fa fa-angle-down" /></a>
        <ul className="all-option collapse" id="category-filter">
          {props.listfilter.map((item, index) => (
            <li className="grid-list-option">
              <input type="checkbox" onChange={handleChange} data-id={item.id} data-index={index} id={item.id} />
              <a href="javascript:void(0)">{item.name}<span className="grid-items">({item.count})</span></a>
            </li>
          ))}
        </ul>
      </div>

    </>
  )
}

export default FilterBy
