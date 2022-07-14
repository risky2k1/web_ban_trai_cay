import React from 'react'
import PropTypes from 'prop-types'
import LisProductShop from '../components/products/ListProductShop'
import ListFilter from '../components/Effect/ListFilter'

Shop.propTypes = {}

function Shop(props) {
  function handleChangeCategory(listcategory){
    
  }
  return (
    <>
      <section className="section-tb-padding">
        <div className="container">
          <div className="row">
            <ListFilter />
            <LisProductShop />
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
