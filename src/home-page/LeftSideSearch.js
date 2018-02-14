import React from 'react';

export const LeftSideSearch = ({handleChange,updatePane, topics}) => {
  return (
    <div>
      <div className="hero-head">
      <section className="field has-addons input-filter">
        <p className="control is-expanded">
          <input
            className="input"
            type="text"
            placeholder="search articles/choose a catagory"
            onChange={handleChange}/>
        </p>
        <p className="control">
          <span className="select">
            <select onChange={(e)=>updatePane(e)}>
              <option>Show All</option>
              {topics && topics.map(topic => {
                return <option>{topic.title.toUpperCase()}</option>
              })}
            </select>
          </span>
        </p>
      </section>
      </div>
    </div>
  )
}