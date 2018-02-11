import React from 'react';
import './index.css';
class HomePage extends React.Component {
  state = { }
  componentDidMount(){}  // componentDidMount

  render(){
      return(
        <div className="home-wrapper">
          <div className="columns home-page isDark">
            <div className="hero column is-one-third">
              <div className='hero-body isWhite'>
                <div className="home-left-side customScroll">

                </div>
              </div>
            </div>  {/* is-one-third */}
            <div className='hero column is-two-third'>
              <div className='hero-body isWhite'>
                <div className="home-right-side customScroll">

                </div>
              </div>
            </div>    {/* column is-two-third */}
           </div>  {/* columns */}
        </div>  
    )   //  return
  } //  render

}   //  class HomePage

export default HomePage;