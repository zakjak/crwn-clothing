import React from 'react'
import CategoryItem from '../category-item/category-item'
import './directory.scss'

const Directory = ({categories}) => {
  return (
    <div className="directory-contianer">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category}  />
      ))}
    </div>
  )
}

export default Directory