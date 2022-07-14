import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import FilterByLink from './FilterByLink'
import FilterBy from './FilterBy'
import FilterTag from './FilterTag'
import categotyApi from '../../apis/CategoryApi'
ListFilter.propTypes = {}

function ListFilter(props) {
  const [categoryList, setCategoryList] = useState([])
  const [Price, setPriceList] = useState([])
  const [tagList, setTagList] = useState([])
  useEffect(() => {
    (async () => {
      try {
        const response = await categotyApi.getAll()
        console.log(response)
        setCategoryList(response)
      } catch (err) {
        console.error(err)
      }
    })()
  },[])
  return (
    <>
      <div className="col-lg-3 col-md-4 col-12">
        <div className="all-filter">
          <FilterByLink title={''} listfilter={categoryList} viewcount={false} />
          <FilterBy title={''} listfilter={[]} nameClass={'price-filter'} />
          <FilterTag title={''} listfilter={[]} nameClass={'filter-tag'} />
          <div className="filter-banner">
            <a href="grid-list.html" className="grid-banner">
              <img
                src="image/grid-banner.jpg"
                className="img-fluid"
                alt="image"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListFilter
